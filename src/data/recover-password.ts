import { gql } from "@apollo/client";

export const createResetPasswordCodeGql = gql`
  mutation createResetPasswordCode($input: ICreateResetPasswordCode!) {
    createResetPasswordCode(input: $input) {
      code
    }
  }
`

export const resetPasswordGql = gql`
  mutation resetPassword($input: IResetPassword!) {
    resetPassword(input: $input)
  } 
`
