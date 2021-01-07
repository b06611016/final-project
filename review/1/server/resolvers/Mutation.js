const Mutation = {
    async addMessage(parent, args, { Message, pubsub }, info){
        const msg = new Message({...args})
        await msg.save()

        pubsub.publish(`user.${args.sender}`, {
                message: { mutation: 'SEND', data: {...args, _id: msg._id}}
        })
        pubsub.publish(`user.${args.receiver}`, {
                message: { mutation: 'RECEIVE', data: {...args, _id: msg._id}}
        })
        pubsub.publish("supervisor", {
                message: { mutation: 'SUPERVISE', data: {...args, _id: msg._id}}
        })
    },
    clearMessages(parent, args, { Message, pubsub }, info){
        Message.deleteMany({"sender": args.user}, ()=>{})
        Message.deleteMany({"receiver": args.user}, ()=>{})
        let topic = ["all_subscribers"]
        
        topic.map(e => 
            pubsub.publish(e, {
                message: { mutation: 'DELETED', data: {sender:"-", receiver:"-", body:`${args.user||"*"}`, _id:"*"} }
            })
        )
    },
}

module.exports = Mutation
