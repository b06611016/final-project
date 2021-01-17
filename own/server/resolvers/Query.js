import Account from '../models/account'
export const Query = {
    async userCheck(parent, { username, password }, context, info) {
        //console.log(context.database)
        let user = await Account.find({ username: username, password: password });
        console.log(user)
        if (user.length === 1)
            return true;
        else
            return false;
    }
}