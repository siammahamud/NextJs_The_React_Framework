import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      ProductsPage
      <ol className="space-y-2">
        
        <Link className="p-2 bg-green-200 font-semibold block" href={'/products/1'}>Product 1 </Link>
        <Link className="p-2 bg-green-200 font-semibold block" href={'/products/2'}>Product 2 </Link>
        <Link className="p-2 bg-green-200 font-semibold block" href={'/products/3'}>Product 3 </Link>
        <Link className="p-2 bg-green-200 font-semibold block" href={'/products/4'}>Product 4 </Link>
    
      </ol>
    </div>
  );
};

export default ProductsPage;
