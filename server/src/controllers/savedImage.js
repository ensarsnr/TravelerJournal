const User = require("../models/user");
const Post = require("../models/post");


const savedImage = async (req, res) => {
    const {imageId} = req.body;

    try {
        
        const userId = req.user ? req.user.userId : null;
        const user = await User.findById(userId);
        const image = await Post.findById(imageId);

        if(!userId) {
            return res.status(404).json({message: "User not found"});
        }


        if(user.saved.includes(imageId)) {
            const filtredSaved = user.saved.filter((id) => {
                id.toString() !== userId;
            })
            user.saved = filtredSaved;
            await user.save();
            return res.status(400).json({messages: "Not saved user is already save"} )
        }else {
            user.saved.push(image);
            await user.save();
            return res.status(400).json({messages: "Image saved successfully", user: user} )
        }

    } catch (error) {
        console.log(`Saved image error: ${error}`)
        res.status(500).json({message: "Internal server error"})
    }
}


module.exports = savedImage;