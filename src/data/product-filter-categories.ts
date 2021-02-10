import { gql } from "@apollo/client";
import { ProductFilter } from "./product-filter";

export interface ProductFilterCategory {
  id: number
  filterName: string
  filterValues: ProductFilter[]
}

// Miutations
export const createProductFilterCategoryGql = gql`
  mutation createProductFilterCategory($input: ICreateProductFilterCategory!) {
    createProductFilterCategory(input: $input)
  }
`

export const updateProductFilterCategoryGql = gql`
  mutation updateProductFilterCategory($input: IUpdateProductFilterCategory!) {
    updateProductFilterCategory(input: $input)
  }
`

export const deleteProductFilterCategoryGql = gql`
  mutation deleteProductFilterCategory($input: IDeleteProductFilterCategory!) {
    deleteProductFilterCategory(input: $input)
  }
`

// Queries
export const getProductFilterCategoryByIdGql = gql`
  query getProductFilterCategoryById($id: Int!) {
    getProductFilterCategoryById(id: $id) {
      id
      filterName
      filterValues {
        id
        value
      }
    }
  }
`

export const listProductFilterCategoriesGql = gql`
  query listProductFilterCategories($filter: IProductFilterCategoryFilter) {
    listProductFilterCategories(filter: $filter) {
      id
      filterName
      filterValues {
        id
        value
      }
    }
  }
`



