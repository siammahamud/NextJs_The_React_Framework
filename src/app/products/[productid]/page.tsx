import Link from "next/link";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const id = (await params).productId;
  return <div>ProductDetailPage:
    <p>product no {id}</p>
    <Link className="underline text-blue-400" href={'/reviews'}>Reviews Section</Link>
  </div>;
};

export default ProductDetailPage;
