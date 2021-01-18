import Account from '../models/account'
export const Query = {
    async userCheck(parent, { username, password }, context, info) {
        //console.log(context.database)
        let user = await Account.find({ username: username, password: password });
        console.log(user)
        //console.log(user[0].strength)
        if (user.length === 1)
            return {
                _isSuccess: true,
                strength: user[0].strength
            }
        else
            return {
                _isSuccess: false,
                strength: "NULL"
            }
    }
}
