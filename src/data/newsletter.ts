import { gql } from "@apollo/client";

export interface Newsletter {
  id: number
  email: string
  subscribedAt: string
}

// Mutations
export const subscribeNewsletterGql = gql`
  mutation subscribeNewsletter($input: ISubscribeNewsletter!) {
    subscribeNewsletter(input: $input)
  }
`

// Queries
export const listNewslettersGql = gql`
  query listNewsletters($filter: INewsletterFilter) {
    listNewsletters(filter: $filter) {
      id
      email
      subscribedAt
    }
  }
`
