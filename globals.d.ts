interface faqType{
    question: string,
    answer: string
}

interface linkProps{
    href: string,
    target: string,
    className: string,
    style: any,
    isLocal: boolean
}

interface reviewType{
    title: string,
    desc: string,
    name: string,
    role: string
}


interface multiPartFormSection{
    elements: any,
    title: string,
    subtitle?: string
}

interface servicesModuleType{
    services: serviceType[]
}

interface serviceType{
    icon: any,
    title: string,
    description: string,
    backgroundImageUrl: string,
    url?: string
}

interface productType{
    availableForSale: boolean,
    description: string,
    handle: string,
    variants: variantType[],
    options: optionType[],
    id: string,
    title: string,
    options: [],
    images: imageType[]
}

interface selectedOptionType {
    name: string,
    value: string
}

interface optionType{
    id: string,
    name: string,
    values: optionValueType[]
}

interface qtyAvail{
    variants: qtyVariant[]
}

interface qtyVariant{
    id: string,
    quantityAvailable: number,
    availableForSale: boolean
}

interface optionValueType {value: string}

interface variantType{
    product: {
        handle: string,
        id: string
    },
    title: string,
    price: {
        amount: string,
        currencyCode: string
    },
    selectedOptions: selectedOptionType[],
    compareAtPrice: {
        amount: string,
        currencyCode: string
    } | undefined,
    title: string,
    id: string,
    available: boolean,
    image: imageType
}
    
interface imageType{
    altText: string,
    id: string,
    src: string
}

interface cartType{
    id: string,
    lineItems: lineItemType[],
    lineItemsSubtotalPrice: {
        amount: string,
        currencyCode: string,
    },
    paymentDue: {
        amount: string,
        currencyCode: string,
    },
    subtotalPrice: {
        amount: string,
        currencyCode: string,
    },
    webUrl: string
}

interface lineItemType{
    id: string,
    title: string,
    quantity: number,
    variant: variantType
}
