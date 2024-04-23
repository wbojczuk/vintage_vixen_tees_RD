import Client from "shopify-buy";
import UOClient from "shopify-buy/index.unoptimized.umd";
export const client = Client.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_KEY,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_URL
})

export const uoclient = UOClient.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_KEY,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_URL
})
