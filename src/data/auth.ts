import { gql } from "@apollo/client";
import { User } from "..";
import { userFullDetailsFragment } from "./users";

export interface AuthResponse {
	user: User
  accessToken: string
}

export interface ValidateJwtResponse {
	tokenIsValid: boolean
}

// Mutations
export const loginGql = gql`
	mutation login($input: ILogin!) {
		login(input: $input) {
			user {
				...userFullDetailsFragment
			}
			acessToken
		}
	}
	${userFullDetailsFragment}
`;

// Queries
export const validateJwtGql = gql`
	query validateJwt {
		validateJwt {
			tokenIsValid
		}
	}
`
