import {gql} from 'apollo-boost'

const sendMessage = gql`
    mutation clearMessages(
        $user: String!
        )
    {
            clearMessages(
                user: $user,
            )
    }
`

export default sendMessage
