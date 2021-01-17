import Account from '../models/account'

export const Mutation = {
    async createUser(parent, { username, password }, context, info) {
        let count = await Account.find({ username: username }).count();
        if (count > 0)
            return false;
        await Account.create({ username: username, password: password });
        return true;
    }
}