import { gql } from "@apollo/client";
import { User } from "./users";

export interface DocumentCategory {
  id: number
  name: string
  description: string
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
}

// Fragments
export const documentCategoriesMinimumDetailsFragment = gql`
	fragment documentCategoriesMinimumDetailsFragment on DocumentCategoriesEntity {
    id
    name
    description
    createdAt
    updatedAt
	}
`

export const documentCategoriesFullDetailsFragment = gql`
	fragment documentCategoriesFullDetailsFragment on DocumentCategoriesEntity {
    id
    name
    description
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

export const createDocumentCategoryGql = gql`
  mutation createDocumentCategory($input: ICreateDocumentCategory!) {
    createDocumentCategory(input: $input)
  }
`

export const updateDocumentCategoryGql = gql`
  mutation updateDocumentCategory($input: IUpdateDocumentCategory!) {
    updateDocumentCategory(input: $input)
  }
`

export const deleteDocumentCategoryGql = gql`
  mutation deleteDocumentCategory($input: IDeleteDocumentCategory!) {
    deleteDocumentCategory(input: $input)
  }
`

// Queries
export const getDocumentCategoryByIdGql = gql`
  query getDocumentCategoryById($id: Int!) {
    getDocumentCategoryById(id: $id) {
      ...documentCategoriesFullDetailsFragment
    }
  }
  ${documentCategoriesFullDetailsFragment}
`

export const listDocumentCategoriesGql = gql`
  query listDocumentCategories($filter: IDocumentCategoryFilter) {
    listDocumentCategories(filter: $filter) {
      ...documentCategoriesMinimumDetailsFragment
    }
  }
  ${documentCategoriesMinimumDetailsFragment}
`
