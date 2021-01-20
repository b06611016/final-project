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
export const UPDATE_COMPLETION = gql`
    mutation updateCompletion(
        $username: String!
        $completion: Int!
    ){
        updateCompletion(
            username: $username
            completion: $completion
        )
    }
`
export const RESET_COMPLETION = gql`
    mutation resetCompletion(
        $username: String!
    ){
        resetCompletion(
            username: $username
        )
    }
`
export const CHANGE_STRENGTH = gql`
    mutation changeStrength(
        $username: String!
        $strength: String!
    ){
        changeStrength(
            username: $username
            strength: $strength
        )
    }
`