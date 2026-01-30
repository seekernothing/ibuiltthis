export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const {id} = await params
    return(
        <div>
            <h2>Product is is {id}</h2>
        </div>
    )
}
