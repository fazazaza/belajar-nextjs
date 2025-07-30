export default async function BlogsDetail({
    params,
}: {
    params: Promise<{ blogsId: string}>;

}) {
    const blogsId = (await params).blogsId;
    return <h1>Details About Blog {blogsId}</h1>;
}