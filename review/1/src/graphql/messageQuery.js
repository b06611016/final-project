import {gql} from 'apollo-boost'

export default function query(user){
    return gql`
        query{
          messages(user: "${user}"){
            sender
            receiver
            body
          }
        }
`
}