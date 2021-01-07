import {gql} from 'apollo-boost'

const sendMessage = gql`
    mutation addMessage(
        $sender: String!
        $receiver: String!
        $body: String!
        )
    {
            addMessage(
            sender: $sender,
            receiver: $receiver,
            body: $body
            )
    }
`

export default sendMessage
