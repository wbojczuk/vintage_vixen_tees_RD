import ProductPage from "@/app/components/ShopifyComponents/ProductPage/ProductPage"
import { Metadata } from "next"
import { client } from "@/app/shopify/shopifyStore"


export async function generateMetadata({params}: {params: {handle: string}}): Promise<Metadata>{
  const productsData: productType = await client.product.fetchByHandle(params.handle)
  return {
      title: `${productsData?.title}`,
      description: productsData?.description,
      openGraph: {
          title: `${productsData?.title}`,
          description: productsData?.description,
          type: "website",
          images: [
            {
              url: productsData?.images[0].src || '',
              width: 1920,
              height: 1080,
            }
          ]
        },
        twitter: {
          card: 'summary_large_image',
          title: `${productsData?.title}`,
          description: productsData?.description,
          images: [ productsData?.images[0].src || '',]
        },
      }
}

export async function generateStaticParams(){
  const products = await client.product.fetchAll(25)
  const handles = products.map((product:productType)=>{
    const handle = product.handle
    return {handle}
  })
  return handles
}

export default function ProductPagePage({params}: {params:{handle: string}}) {
    return (
      <ProductPage productHandle={params.handle} />
    )
  }
