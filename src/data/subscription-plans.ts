import { gql } from "@apollo/client";

export interface SubscriptionPlan {
  id: number
  name: string
  description: string
  admissionFee: number
  amount: number
  startingDay: number
  startingMonth: number
  endingDay: number
  endingMonth: number
}


export const subscriptionPlansMinimumDetailsFragment = gql`
  fragment subscriptionPlansMinimumDetailsFragment on SubscriptionPlansEntity {
    id
    name
    admissionFee
    amount
  }
`;

export const subscriptionPlansFullDetailsFragment = gql`
  fragment subscriptionPlansFullDetailsFragment on SubscriptionPlansEntity {
    id
    name
    description
    admissionFee
    amount
    startingDay
    startingMonth
    endingDay
    endingMonth
  }
`;

// Mutations
export const createSubscriptionPlanGql = gql`
  mutation createSubscriptionPlan($input: ICreateSubscriptionPlan!) {
    createSubscriptionPlan(input: $input)
  }
`

export const updateSubscriptionPlanGql = gql`
  mutation updateSubscriptionPlan($input: IUpdateSubscriptionPlan!) {
    updateSubscriptionPlan(input: $input)
  }
`

export const deleteSubscriptionPlanGql = gql`
  mutation deleteSubscriptionPlan($input: IDeleteSubscriptionPlan!) {
    deleteSubscriptionPlan(input: $input)
  }
`

// Queries
export const getSubscriptionPlanByIdGql = gql`
  query getSubscriptionPlanById($id: Int!) {
    getSubscriptionPlanById(id: $id) {
      ...subscriptionPlansFullDetailsFragment
    }
  }
  ${subscriptionPlansFullDetailsFragment}
`

export const listSubscriptionPlansGql = gql`
  query listSubscriptionPlans($filter: ISubscriptionPlansFilter) {
    listSubscriptionPlans(filter: $filter) {
      ...subscriptionPlansMinimumDetailsFragment
    }
  }
  ${subscriptionPlansMinimumDetailsFragment}
`
