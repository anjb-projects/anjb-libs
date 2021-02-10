import { gql } from "@apollo/client"
import { ProductCategory } from "./product-categories"
import { ProductVariant } from "./product-variants"
import { User, UserRole } from "./users"

export interface Product {
  id: number
  name: string
  description: string
  price: number
  subscriberPrice: number
  isActive: boolean
  availableTo: UserRole
  productCategory: ProductCategory
  numberOfViews: number
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
  productVariants: ProductVariant[]
}


export const productFullDetailsFragment = gql`
  fragment productFullDetailsFragment on ProductEntity {
    id
    name
    description
    price
    subscriberPrice
    isActive
    availableTo
    productVariants {
      id
      productImages
      productFilters {
        value
      }
    }
    productCategory {
      id
      name
      productFilterCategories {
        id
        filterName
        filterValues {
          id
          value
        }
      }
    }
    numberOfViews
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

export const productMinimumDetailsFragment = gql`
  fragment productMinimumDetailsFragment on ProductEntity {
    id
    name
    description
    price
    subscriberPrice
    isActive
    availableTo
    productCategory {
      id
      name
    }
    numberOfViews
    createdBy {
      id
      username
    }
    createdAt
  }
`

// Mutations
export const createProductGql = gql`
  mutation createProduct($input: ICreateProduct!) {
    createProduct(input: $input)
  }
`

export const updateProductGql = gql`
  mutation updateProduct($input: IUpdateProduct!) {
    updateProduct(input: $input)
  }
`

export const deleteProductGql = gql`
  mutation deleteProduct($input: IDeleteProduct!) {
    deleteProduct(input: $input)
  }
`

// Queries
export const getProductByIdGql = gql`
  query getProductById($id: Int!) {
    getProductById(id: $id) {
      ...productFullDetailsFragment
    }
  }
  ${productFullDetailsFragment}
`

export const listProductsGql = gql`
  query listProducts($filter: IProductFilter!) {
    listProducts(filter: $filter) {
      ...productMinimumDetailsFragment
    }
  }
  ${productMinimumDetailsFragment}
`
