// Feature verification script

// If node-fetch is not available, we might rely on native fetch (Node 18+) or axios if installed.
// Checking package.json earlier, I didn't see axios or node-fetch.
// I'll try native fetch first, wrapped in try-catch or checks.

const BASE_URL = 'http://localhost:4002';

async function verify() {
    try {
        console.log("1. Creating a featured product...");
        // Need a valid category ID first.
        // I'll fetch products to find a valid categoryId from an existing product, 
        // or create a category if needed. But let's assume one exists.
        // Actually, I can fetch all categories if I had a route, but I don't think I saw a get-all-categories route.
        // I saw `categoryRoutes.js` but didn't read it.
        // `productRoutes.js` gets `Category` model.

        // Let's try to fetch products first to get a categoryId.
        const productsRes = await fetch(`${BASE_URL}/api/products`);
        const productsData = await productsRes.json();

        let categoryId = 1;
        if (productsData.products && productsData.products.length > 0) {
            categoryId = productsData.products[0].categoryId;
        } else {
            console.log("No products found, using default categoryId 1. This might fail if Category 1 doesn't exist.");
        }

        const newProduct = {
            name: "Test Featured Product " + Date.now(),
            price: 1234,
            description: "A test verified product",
            image: "/test.png",
            categoryId: categoryId,
            featured: true
        };

        const createRes = await fetch(`${BASE_URL}/api/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        });

        if (!createRes.ok) {
            throw new Error(`Failed to create product: ${createRes.status} ${await createRes.text()}`);
        }
        console.log("Product created successfully.");

        console.log("2. Fetching featured products...");
        const featuredRes = await fetch(`${BASE_URL}/api/products?featured=true`);
        const featuredData = await featuredRes.json();

        console.log(`Found ${featuredData.products.length} featured products.`);

        const found = featuredData.products.find(p => p.name === newProduct.name);
        if (found) {
            console.log("SUCCESS: Created product found in featured list.");
            console.log("Category Name Populated:", found.category);
        } else {
            console.error("FAILURE: Created product NOT found in featured list.");
        }

    } catch (error) {
        console.error("Verification failed:", error);
    }
}

verify();
