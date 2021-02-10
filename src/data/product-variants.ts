import { gql } from "@apollo/client"
import { ProductFilter } from "./product-filter"
import { Product } from "./products"
import { User } from "./users"
export interface ProductVariant {
  id: number
  product: Product
  stockQuantity: number
  isActive: boolean
  productFilters: ProductFilter[]
  productImages: string[]
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
}

export const getProductVariantTitle = (productVariant: ProductVariant): string => {
  const productName = productVariant?.product?.name
  const { productFilters = [] } = productVariant

  const filters = productFilters.map((productFilter) => productFilter.value).join(', ')
  return `${productName} - ${filters}` || '-'
}

export const productVariantFullDetailsFragment = gql`
  fragment productVariantFullDetailsFragment on ProductVariantEntity {
    id
    stockQuantity
    isActive
    product {
      id
      name
    }
    productFilters {
      id
      value
      productFilterCategory {
        id
        filterName
      }
    }
    productImages
    createdBy {
      id
      username
    }
    updatedBy {
      id
      username
    }
    createdAt
    updatedAt
  }
`

export const productVariantMinimumDetailsFragment = gql`
  fragment productVariantMinimumDetailsFragment on ProductVariantEntity {
    id
    stockQuantity
    isActive
    product {
      id
      name
    }
    productFilters {
      id
      value
    }
    productImages
    createdBy {
      id
      username
    }
    createdAt
  }
`

// Mutations
export const createProductVariantGql = gql`
  mutation createProductVariant($input: ICreateProductVariant!) {
    createProductVariant(input: $input)
  }
`

export const updateProductVariantGql = gql`
  mutation updateProductVariant($input: IUpdateProductVariant!) {
    updateProductVariant(input: $input)
  }
`

export const deleteProductVariantGql = gql`
  mutation deleteProductVariant($input: IDeleteProductVariant!) {
    deleteProductVariant(input: $input)
  }
`

// Queries
export const getProductVariantByIdGql = gql`
  query getProductVariantById($id: Int!) {
    getProductVariantById(id: $id) {
      ...productVariantFullDetailsFragment
    }
  }
  ${productVariantFullDetailsFragment}
`

export const listProductVariantsGql = gql`
  query listProductVariants($filter: IProductVariantFilter!) {
    listProductVariants(filter: $filter) {
      ...productVariantMinimumDetailsFragment
    }
  }
  ${productVariantMinimumDetailsFragment}
`
