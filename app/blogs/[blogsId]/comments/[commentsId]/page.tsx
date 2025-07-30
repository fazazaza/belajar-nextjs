export default async function BlogsComments({
    params,
}:{
    params: Promise<{blogsId: string, commentsId: string}>
}) {
    const {blogsId, commentsId} = await params
     return (
        <h1>Blog {commentsId} For comments {blogsId}</h1>
     )
}