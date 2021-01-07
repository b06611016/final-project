import {gql} from 'apollo-boost'

export default function subscribe(user){
    return gql`
        subscription{
            message(user: "${user}"){
                mutation
                data {
                    sender
                    receiver
                    body
                    _id
                }
            }
        }
`
}