import { gql } from "@apollo/client"
import { ProductFilterCategory } from "./product-filter-categories"
import { Product } from "./products"
import { User } from "./users"

export interface ProductCategory {
  id: number
  name: string
  products?: Product[]
  productFilterCategories?: ProductFilterCategory[]
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
}


export const productCategoriesFullDetailsFragment = gql`
  fragment productCategoriesFullDetailsFragment on ProductCategoryEntity {
    id
    name
    products {
      id
      name
    }
    productFilterCategories {
      id
      filterName
      filterValues {
        id
        value
      }
    }

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

export const productCategoriesMinimumDetailsFragment = gql`
  fragment productCategoriesMinimumDetailsFragment on ProductCategoryEntity {
    id
    name
    products {
      id
      name
    }
    productFilterCategories {
      id
      filterName
      filterValues {
        id
        value
      }
    }
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

// Mutations
export const createProductCategoryGql =  gql`
  mutation createProductCategory($input: ICreateProductCategory!) {
    createProductCategory(input: $input)
  }
`

export const updateProductCategoryGql = gql`
  mutation updateProductCategory($input: IUpdateProductCategory!) {
    updateProductCategory(input: $input)
  }
`

export const deleteProductCategoryGql = gql`
  mutation deleteProductCategory($input: IDeleteProductCategory!) {
    deleteProductCategory(input: $input)
  }
`

// Queries
export const getProductCategoryByIdGql = gql`
  query getProductCategoryById($id: Int!) {
    getProductCategoryById(id: $id) {
      ...productCategoriesFullDetailsFragment
    }
  }
  ${productCategoriesFullDetailsFragment}
`

export const listProductCategoriesGql = gql`
  query listProductCategories($filter: IProductCategoryFilter) {
    listProductCategories(filter: $filter) {
      ...productCategoriesMinimumDetailsFragment
    }
  }
  ${productCategoriesMinimumDetailsFragment}
`

