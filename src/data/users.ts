import { gql } from "@apollo/client";
import { subscriptionPlansFullDetailsFragment } from "./subscription-plans";
import { Subscription } from "./subscriptions";
import { UserProfile } from "./user-profiles";

export enum UserRole {
  ANONYMOUS = 'ANONYMOUS',
  USER = 'USER',
  SUBSCRIBER = 'SUBSCRIBER',
  ADMIN = 'ADMIN',
}

export const formatUserRole = (userRole: UserRole): string => {
  if (userRole === UserRole.ADMIN) {
    return 'Administrador'
  }

  if (userRole === UserRole.USER) {
    return 'Utilizador'
  }

  return 'Role de utilizador não reconhecido'
}

export interface User {
  id: number
  username: string
  email: string
  role: UserRole
  isActive: boolean
  lastLoginAt: string
  profile: UserProfile
  category: string
  subscriptions?: Subscription[]
}

export const userMinimumDetailsFragment = gql`
	fragment userMinimumDetailsFragment on UserEntity {
		id
		username
		email
		role
		lastLoginAt
		category
	}
`;

export const userFullDetailsFragment = gql`
	fragment userFullDetailsFragment on UserEntity {
		id
		username
		email
		role
		isActive
		lastLoginAt
		createdAt
		category
		profile {
			fullName
			address
			postalCode
			citizenshipNumber
			taxpayerNumber
			birthdate
			phoneNumber
			updatedAt
		}
		subscriptions {
			id
			subscriptionPlan {
				...subscriptionPlansFullDetailsFragment
			}
			subscribedAt
			status
			fullName
			phone
			email
			address
			zipCode
		}
	}
	${subscriptionPlansFullDetailsFragment}
`;

// Mutations
export const createUserGql = gql`
	mutation createUser($input: ICreateUser!) {
		createUser(input: $input) {
			id
			username
			email
			role
			isActive
			category
		}
	}
`

export const updateUserGql = gql`
	mutation updateUser($input: IUpdateUser!) {
		updateUser(input: $input) {
			id
		}
	}
`

export const deleteUserGql = gql`
	mutation deleteUser($input: IDeleteUser!) {
		deleteUser(input: $input)
	}
`

// Queries
export const getUserByUsernameGql = gql`
	query getUserByUsername($username: String!) {
		getUserByUsername(username: $username) {
			...userFullDetailsFragment
		}
	}
	${userFullDetailsFragment}
`

export const getUserByIdGql = gql`
	query getUserById($id: Int!) {
		getUserById(id: $id) {
			...userFullDetailsFragment
		}
	}
	${userFullDetailsFragment}
`

export const listUsersGql = gql`
	query listUsers($filter: IUserFilter) {
		listUsers(filter: $filter) {
			...userMinimumDetailsFragment
		}
	}
	${userMinimumDetailsFragment}
`
