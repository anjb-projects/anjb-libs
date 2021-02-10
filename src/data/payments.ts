import { gql } from "@apollo/client"

export enum PaymentMethod {
  MULTIBANCO = 'MULTIBANCO',
  MB_WAY = 'MB_WAY'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  REJECTED = 'REJECTED',
}

export interface Payment {
  id: number
  reference: string
  entity?: string
  identifier: string
  paymentStatus: PaymentStatus
  paymentMethod: PaymentMethod
  amount: number
  paidAt: string
}

export const formatPaymentStatus = (paymentStatus: PaymentStatus): string => {
  switch (paymentStatus) {
    case PaymentStatus.PENDING:
      return 'A aguardar pagamento...'
    case PaymentStatus.PAID:
      return 'Pagamento efetuado'
    case PaymentStatus.REJECTED:
      return 'Pagamento rejeitado'
    default:
      return ''
  }
}

export function getLastPayment(payments: Payment[]): Payment | null {
  if (!payments || !payments.length) {
    return null
  }

  return payments.reverse()[0]
}

// Mutations
export const payProductOrderGql = gql`
  mutation payProductOrder($input: IProductOrderPayment!) {
    payProductOrder(input: $input)
  }
`

export const paySubscriptionGql = gql`
  mutation paySubscription($input: ISubscriptionPayment!) {
    paySubscription(input: $input)
  }
`


// Queries
export const getPaymentByIdGql = gql`
  query getPaymentById($id: Int!) {
    getPaymentById(id: $id) {
      id
      reference
      identifier
      amount
      paidAt
      paymentStatus
      paymentMethod
      productOrder {
        id
        user {
          id
          username
        }
      }
      subscription {
        id
        user {
          id
          username
        }
      }
    }
  }
`

export const listPaymentsGql = gql`
  query listPayments($filter: IPaymentFilter) {
    listPayments(filter: $filter) {
      id
      reference
      amount
      paidAt
      paymentStatus
      paymentMethod
      productOrder {
        id
        user {
          id
          username
        }
      }
      subscription {
        id
        user {
          id
          username
        }
      }
    }
  }
`
