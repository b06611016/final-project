import { gql } from 'apollo-boost'

export const USER_QUERY = gql`
    query userCheck(
        $username: String!
        $password: String!
    ){
        userCheck(
            username: $username
            password: $password
        ){
            _isSuccess
            strength
        }
    }
`