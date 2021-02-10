import { gql } from "@apollo/client";
import { BaseImageUpload } from "./image-uploads";

export interface PublicationImageUpload extends BaseImageUpload { }

// Mutations
export const uploadPublicationImageGql = gql`
  mutation uploadPublicationImage($file: Upload!) {
    uploadPublicationImage(file: $file) {
      id
      name
      publicPath
      width
      height
    }
  } 
`

export const deletePublicationImageGql = gql`
  mutation deletePublicationImageUpload($input: IDeletePublicationImageUpload!) {
    deletePublicationImageUpload(input: $input) 
  }
`

// Queries
export const listPublicationImageUploadsGql = gql`
  query listPublicationImageUploads($filter: IPublicationImageUploadFilter) {
    listPublicationImageUploads(filter: $filter) {
      id
      name
      publicPath
      width
      height
    }
  }
`
