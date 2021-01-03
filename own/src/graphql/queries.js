import { gql } from 'apollo-boost'

export const CHATS_QUERY = gql`
    query chats(
        $sent: String!
        $receive: String!
        ){
        chats(
            sent: $sent
            receive: $receive
        ){
            sent
            receive
            body
        }
    }
`