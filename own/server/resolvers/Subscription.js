export const Subscription = {
    chat: {
        subscribe(parent, args, context, info) {
            return context.pubsub.asyncIterator('chat');
        }
    },
    deletechats: {
        subscribe(parent, args, context, info){
            return context.pubsub.asyncIterator('deletechats')
        }
    }
}