import Message from '../models/message'

export const Mutation = {
    async createChat(parent, { request, data }, context, info) {
        if (request !== 'input') {
            throw new Error("error happens")
        }
        await Message.create(data);

        const post = { ...data }
        context.database.push(post);

        console.log(context.database)
        const message = {
            task: "output",
            payload: post
        }

        context.pubsub.publish('chat', {
            chat: {
                mutation: 'CREATED',
                data: post
            }
        })
        return message;
    },
    async deleteChats(parent, { request, sent }, context, info) {
        if (request !== 'clear') {
            throw new Error("error happens")
        }
        await Message.deleteMany({"sent": sent});
        const msg = {
            type: "info",
            msg: "Message cache of " + sent + " cleared."
        }
        /*for (let index = 0; index < context.database.length; ++index) {
            context.pubsub.publish('chat', {
                chat: {
                    mutation: 'DELETED',
                    data: context.database[index]
                }
            })
        }*/
        context.pubsub.publish('deletechats', {
            deletechats: {
                mutation: "CLEAR",
                sent: sent
            }
        })
        context.database = context.database.filter((e) => {
            if(e.sent === sent)
                return false
            return true
        })
        //console.log(context.database)
        return msg
    }
}