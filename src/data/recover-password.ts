import { gql } from "@apollo/client";

export const resetPasswordGql = gql`
  mutation resetPassword($input: IResetPassword!) {
    resetPassword(input: $input)
  } 
`
