import { gql } from "@apollo/client"
import { PublicationCategory } from "./publication-categories"
import { User, UserRole } from "./users"

export enum PublicationStatus {
  PUBLISHED = 'PUBLISHED',
  IN_DRAFT = 'IN_DRAFT',
  SOFT_DELETED = 'SOFT_DELETED',
}
export interface Publication {
  id: number
  name: string
  description: string
  image: string
  content: string
  publicationCategories: PublicationCategory[]
  tags: string
  status: PublicationStatus
  audience: UserRole
  isHighlighted: boolean
  likes: number
  createdBy: User
  updatedBy: User
  createdAt: string
  updatedAt: string
}

export const publicationMinimumDetailsFragment = gql`
	fragment publicationMinimumDetailsFragment on PublicationEntity {
		id
		name
		content
		publicationCategories {
			id
			name
		}
		tags
		status
		audience
		isHighlighted
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

export const publicationFullDetailsFragment = gql`
	fragment publicationFullDetailsFragment on PublicationEntity {
		id
		name
		description
		image
		content
		isHighlighted
		publicationCategories {
			id
			name
		}
		tags
		status
		audience
		likes
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
export const createPublicationGql = gql`
  mutation createPublication($input: ICreatePublication!) {
    createPublication(input: $input)
  }
`

export const updatePublicationGql = gql`
  mutation updatePublication($input: IUpdatePublication!) {
    updatePublication(input: $input)
  }
`

export const deletePublicationGql = gql`
  mutation deletePublication($input: IDeletePublication!) {
    deletePublication(input: $input)
  }
`

// Queries
export const getPublicationByIdGql = gql`
  query getPublicationById($id: Int!) {
    getPublicationById(id: $id) {
      ...publicationFullDetailsFragment
    }
  }
  ${publicationFullDetailsFragment}
`

export const listPublicationsGql = gql`
  query listPublications($filter: IPublicationFilter) {
    listPublications(filter: $filter) {
      ...publicationMinimumDetailsFragment
    }
  }
  ${publicationMinimumDetailsFragment}
`

export const listHighlightedPublicationsGql = gql`
	query listHighlightedPublications {
		listHighlightedPublications {
			...publicationMinimumDetailsFragment
		}
	}
	${publicationMinimumDetailsFragment}
`
