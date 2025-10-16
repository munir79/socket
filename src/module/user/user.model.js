

const getAllUsers=async(currentUserId)=>{
    const users=users.find({_id:{$ne:currentUserId}}).select("-password").sort({crea})
}

// cls