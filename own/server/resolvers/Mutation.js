const Account = require('../models/account')
const { updateOne } = require('../models/account')

const Mutation = {
    async createUser(parent, { username, password, strength }, context, info) {
        let count = await Account.find({ username: username });
        if (count.length > 0)
            return false;
        await Account.create({ username: username, password: password, strength: strength, completion: 0 });
        return true;
    },
    async changeStrength(parent, { username, strength }, context, info) {
        await Account.updateOne({"username": username}, { $set: { "strength": strength, "completion": 0}});
        return true;
    },
    async resetCompletion(parent, { username }, context, info){
        await Account.updateOne({ "username": username}, { $set: { "completion": 0 }});
        return true;
    },
    async updateCompletion(parent, { username, completion }, content, info){
        await Account.updateOne({ "username": username }, { $set: { "completion": completion }})
        return true;
    }
}

module.exports = Mutation;