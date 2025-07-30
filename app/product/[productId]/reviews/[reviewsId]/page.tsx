import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config"

export default async function ProductReviews({
    params,
}:{
    params: Promise<{productId: string, reviewsId: string}>
}) {
    const {productId, reviewsId} = await params
     return (
        <h1>Review {reviewsId} For product {productId}</h1>
     )
}