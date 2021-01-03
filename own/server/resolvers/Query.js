import Message from '../models/message'
export const Query = {
    async chats(parent, args, context, info) {
        //console.log(context.database)
        return context.database.filter((e) => {
            if ((e.sent === args.sent && e.receive === args.receive) || (e.sent === args.receive && e.receive === args.sent))
                return true;
            else
                return false;
        })
    }
}