import { gql } from 'apollo-boost'

export const CREATE_CHAT_MUTATION = gql`
    mutation createChat(
        $sent: String!
        $receive: String!
        $body: String!
    ){
        createChat(
            request: "input"
            data: {
                sent: $sent
                receive: $receive
                body: $body
            }
        ){
            task
            payload {
                sent
                receive
                body
            }
        }
    }
`
export const DELET_ALL_CHATS_MUTATION = gql`
    mutation deleteChats(
        $request: String!
        $sent: String!
    ){
        deleteChats(
            request: $request
            sent: $sent
        ){
            type
            msg
        }
    }
`