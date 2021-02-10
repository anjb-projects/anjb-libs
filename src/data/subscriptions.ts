import { gql } from "@apollo/client";
import { Payment } from "./payments";
import { SubscriptionPlan, subscriptionPlansFullDetailsFragment } from "./subscription-plans";

export enum SubscriptionStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
}

export const formatSubscriptionStatus = (status: SubscriptionStatus): string => {
  switch (status) {
    case SubscriptionStatus.ACTIVE:
      return 'Ativa'
    case SubscriptionStatus.INACTIVE:
      return 'Inativa'
    case SubscriptionStatus.CANCELLED:
      return 'Cancelada'
    default:
      return ''
  }
}

export interface Subscription {
  id: number
  subscriptionPlan: SubscriptionPlan
  payments: Payment[]
  subscribedAt: string
  status: SubscriptionStatus
  fullName: string
  phone: string
  email: string
  address: string
  zipCode: string
}

export const subscriptionFullDetailsFragment = gql`
  fragment subscriptionFullDetailsFragment on SubscriptionsEntity {
    id
    subscriptionPlan {
      ...subscriptionPlansFullDetailsFragment
    }
    user {
      id
      username
    }
    payments {
      id
      amount
      paymentMethod
      paidAt
    }
    subscribedAt
    status
  }
  ${subscriptionPlansFullDetailsFragment}
`

export const subscriptionMinimumDetailsFragment = gql`
  fragment subscriptionMinimumDetailsFragment on SubscriptionsEntity {
    id
    subscriptionPlan {
      id
      name
    }
    user {
      id
      username
    }
    payments {
      id
      paidAt
    }
    subscribedAt
    status
  }
`

export const getSubscriptionByIdGql = gql`
  query getSubscriptionById($id: Int!) {
    getSubscriptionById(id: $id) {
      ...subscriptionFullDetailsFragment
    }
  }
  ${subscriptionFullDetailsFragment}
`

export const listSubscriptionsGql = gql`
  query listSubscriptions($filter: ISubscriptionsFilter) {
    listSubscriptions(filter: $filter) {
      ...subscriptionMinimumDetailsFragment
    }
  }
  ${subscriptionMinimumDetailsFragment}
`

export const listUserOwnSubscriptionsGql = gql`
  query listUserOwnSubscriptions($filter: ISubscriptionsFilter) {
    listUserOwnSubscriptions(filter: $filter) {
      ...subscriptionMinimumDetailsFragment
    }
  }
  ${subscriptionMinimumDetailsFragment}
`
