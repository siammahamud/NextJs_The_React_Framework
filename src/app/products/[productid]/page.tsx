const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  const id = (await params).productid;
  return <div>ProductDetailPage - {id}</div>;
};

export default ProductDetailPage;
