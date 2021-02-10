import { gql } from "@apollo/client"
import { User } from "./users"

export interface PublicationCategory {
  id: number
  name: string
  description: string
  deletable: boolean
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
}

export const publicationCategoryMinimumDetailsFragment = gql`
	fragment publicationCategoryMinimumDetailsFragment on PublicationCategoryEntity {
		id
		name
		description
		createdAt
		updatedAt
		createdBy {
			id
			username
		}
		updatedBy {
			id
			username
		}
	}
`

export const publicationCategoryFullDetailsFragment = gql`
	fragment publicationCategoryFullDetailsFragment on PublicationCategoryEntity {
		id
		name
		description
		deletable
		createdAt
		updatedAt
		createdBy {
			id
			username
		}
		updatedBy {
			id
			username
		}
	}
`

// Mutations
export const createPublicationCategoryGql = gql`
  mutation createPublicationCategory($input: ICreatePublicationCategory!) {
    createPublicationCategory(input: $input)
  }
`

export const updatePublicationCategoryGql = gql`
  mutation updatePublicationCategory($input: IUpdatePublicationCategory!) {
    updatePublicationCategory(input: $input)
  }
`

export const deletePublicationCategoryGql = gql`
  mutation deletePublicationCategory($input: IDeletePublicationCategory!) {
    deletePublicationCategory(input: $input)
  }
`

// Queries
export const getPublicationCategoryByIdGql = gql`
  query getPublicationCategoryById($id: Int!) {
    getPublicationCategoryById(id: $id) {
      ...publicationCategoryFullDetailsFragment
    }
  }
  ${publicationCategoryFullDetailsFragment}
`

export const listPublicationCategoriesGql = gql`
  query listPublicationCategories($filter: ICategoryFilter) {
    listPublicationCategories(filter: $filter) {
      ...publicationCategoryMinimumDetailsFragment
    }
  }
  ${publicationCategoryMinimumDetailsFragment}
`
