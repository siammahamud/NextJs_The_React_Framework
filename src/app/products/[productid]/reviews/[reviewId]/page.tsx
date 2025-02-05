

const IndividualProductReviewPage = async ({params}:{
    params:Promise<{productId:string; reviewId:string}>;
}) => {

    const {productId, reviewId} = await params;
  return (
    <div>
       Review no {reviewId} for product {productId};
    </div>
  )
}

export default IndividualProductReviewPage