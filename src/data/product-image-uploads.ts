import { gql } from "@apollo/client";
import { BaseImageUpload } from "./image-uploads";

export interface ProductImageUpload extends BaseImageUpload {}

// Mutations
export const uploadProductImageGql = gql`
  mutation uploadProductImage($file: Upload!) {
    uploadProductImage(file: $file) {
      id
      name
      publicPath
      width
      height
    }
  } 
`

export const deleteProductImageGql = gql`
  mutation deleteProductImageUpload($input: IDeleteProductImageUpload!) {
    deleteProductImageUpload(input: $input) 
  }
`

// Queries
export const listProductImageUploadsGql = gql`
  query listProductImageUploads($filter: IProductImageUploadFilter!) {
    listProductImageUploads(filter: $filter) {
      id
      name
      publicPath
      width
      height
    }
  }
`
