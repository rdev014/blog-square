
export default async function page( {params}:{
    params:Promise<{productId:String}>
}) {
    const productId = (await params).productId
  return (
    <div>
      this is productss page {productId}
     
    </div>
  )
}
