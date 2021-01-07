const Query = {
    async messages(parent, args, { Message }, info){
        const data = await Message.find().sort({ _id: 1 })
        return data.filter(e => !args.user || e.sender === args.user || e.receiver === args.user)
    }
}

module.exports = Query
