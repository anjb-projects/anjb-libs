import { gql } from "@apollo/client";
import { User } from "./users";

export interface DocumentUpload {
  id: number
  filePath: string
  publicPath: string
  uploadedBy: User
  uploadedAt: string
}

export const uploadDocumentGql = gql`
  mutation uploadDocument($file: Upload!) {
    uploadDocument(file: $file) {
      id
      publicPath
    }
  } 
`

export const deleteDocumentUploadByPublicPathGql = gql`
  mutation deleteDocumentUploadByPublicPath($input: IDeleteDocumentUploadByPublicPath!) {
    deleteDocumentUploadByPublicPath(input: $input) 
  }
`

export const listDocumentUploadsGql = gql`
  query listDocumentUploads($filter: IDocumentUploadsFilter) {
    listDocumentUploads(filter: $filter) {
      id
      name
      publicPath
    }
  }
`
