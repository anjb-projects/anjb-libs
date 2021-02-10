import { gql } from "@apollo/client";
import { Payment } from "./payments";
import { ProductVariant } from "./product-variants";
import { User } from "./users";

export interface ProductOrder {
  id: number
  user: User
  fullName: string
  phone: string
  email: string
  address: string
  zipCode: string
  orderAmount: number
  productOrderDetails: ProductOrderDetails[]
  payments: Payment[]
  orderedAt: string
}

export interface ProductOrderDetails {
  id: number
  productOrder: ProductOrder
  productVariant: ProductVariant
  quantity: number
}


export const productOrderDetailsFullDetailsFragment = gql`
  fragment productOrderDetailsFullDetailsFragment on ProductOrdersEntity {
    id
    user {
      id
      username
    }
    fullName
    phone
    email
    address
    zipCode
    orderAmount
    productOrderDetails {
      id
      productVariant {
        id 
        productFilters {
          id
          value
          productFilterCategory {
            id
            filterName
          }
        }
        product {
          name
          subscriberPrice
          price
        }
      }
      quantity
    }
    payments {
      id
      reference
      paymentStatus
    }
    orderedAt
  }
`


export const productOrdersMinimumDetailsFragment = gql`
	fragment productOrdersMinimumDetailsFragment on ProductOrdersEntity {
    id
    user {
      id
      username
    }
    fullName
    phone
    email
    address
    zipCode
    productOrderDetails {
      id
    }
    orderAmount
    orderedAt
	}
`

// Mutations
export const createProductOrderGql = gql`
  mutation createProductOrder($input: ICreateProductOrder!) {
    createProductOrder(input: $input) {
      id
    }
  }
`

export const cancelProductOrderGql = gql`
  mutation cancelProductOrder($input: ICancelProductOrder!) {
    cancelProductOrder(input: $input)
  }
`

// Queries
export const getProductOrderByIdGql = gql`
  query getProductOrderById($id: Int!) {
    getProductOrderById(id: $id) {
      ...productOrderDetailsFullDetailsFragment
    }
  }
  ${productOrderDetailsFullDetailsFragment}
`

export const listProductOrdersGql =  gql`
  query listProductOrders($filter: IProductOrderFilter!) {
    listProductOrders(filter: $filter) {
      ...productOrderDetailsFullDetailsFragment
    }
  }
  ${productOrderDetailsFullDetailsFragment}
`
