import Link from 'next/link';
import Image from 'next/image';
export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #C19A6B',
      padding: '16px',
      borderRadius: '8px'
    }}>
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link href={`/product/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}
