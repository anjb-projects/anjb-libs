import { gql } from "@apollo/client"
import { DocumentCategory } from "./document-categories"
import { User } from "./users"

export interface Document {
  id: number
  name: string
  description: string
  documentFilePath: string
  documentCategories?: DocumentCategory[]
  numberOfDownloads?: number
  createdBy: User
  updatedBy: User
  createdAt?: string
  updatedAt?: string
}

// Fragments
export const documentFullDetailsFragment = gql`
  fragment documentFullDetailsFragment on DocumentEntity {
    id
    name
    description
    documentFilePath
    documentCategories {
      id
      name
    }
    numberOfDownloads
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

export const documentMinimumDetailsFragment = gql`
  fragment documentMinimumDetailsFragment on DocumentEntity {
    id
    name
    description
    documentFilePath
    documentCategories {
      id
      name
    }
    createdAt
    updatedAt
    numberOfDownloads
  }
`

// Mutations
export const createDocumentGql = gql`
  mutation createDocument($input: ICreateDocument!) {
    createDocument(input: $input)
  }
`

export const updateDocumentGql = gql`
  mutation updateDocument($input: IUpdateDocument!) {
    updateDocument(input: $input)
  }
`

export const deleteDocumentGql = gql`
  mutation deleteDocument($input: IDeleteDocument!) {
    deleteDocument(input: $input)
  }
`

// Queries
export const getDocumentByIdGql = gql`
  query getDocumentById($id: Int!) {
    getDocumentById(id: $id) {
      ...documentFullDetailsFragment
    }
  }
  ${documentFullDetailsFragment}
`

export const listDocumentsGql = gql`
  query listDocuments($filter: IDocumentFilter) {
    listDocuments(filter: $filter) {
      ...documentMinimumDetailsFragment
    }
  }
  ${documentMinimumDetailsFragment}
`
