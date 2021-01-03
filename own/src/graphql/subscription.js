import { gql } from 'apollo-boost'

export const CHATS_SUBSCRIPTION = gql `
    subscription{
        chat{
            mutation
            data{
                sent
                receive
                body
            }
        }
    }
`

export const DELETE_SUBSCIPTION = gql`
    subscription{
        deletechats{
            mutation
            sent
        }
    }
`