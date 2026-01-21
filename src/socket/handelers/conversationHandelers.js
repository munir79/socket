const registarConversationHandelers=(io,socket)=>{
    //listen event of  joinConversation
    socket.on('joinConversation',({conversationId})=>{
     
        //and join in 
        socket.join(conversationId)
    })
}


export default registarConversationHandelers;