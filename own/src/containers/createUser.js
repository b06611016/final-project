import { useMutation } from '@apollo/react-hooks'
import  { CREATE_USER_MUTATION } from '../graphql'

const CreateUser = () => {
    const [addUser, { data, loading }] = useMutation(CREATE_USER_MUTATION);
    const createOutcome = data;
    const createLoading = loading;
    return { addUser, createOutcome, createLoading };
}

export default CreateUser;
