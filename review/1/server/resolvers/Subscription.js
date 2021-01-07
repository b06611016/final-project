const Subscription = {
    message: {
        async subscribe(parent, args, { Message , pubsub }, info) {
            let topic

            if(!args.user)
                topic = ["all_subscribers", "supervisor"]
            else
                topic = ["all_subscribers", `user.${args.user}`]
            
            const iter = pubsub.asyncIterator(topic)

            return iter
        }
    }
}

module.exports = Subscription
