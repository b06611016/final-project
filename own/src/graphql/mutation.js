import { gql } from 'apollo-boost'

export const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $username: String!
        $password: String!
        $strength: String!
    ){
        createUser(
            username: $username
            password: $password
            strength: $strength
        )
    }
`