const Post = require("../models/post");


const images = async (req, res) => {
    try {
        const userId = req.user ? req.user.userId : null;

        if(!userId) {
            return res.status(401).json({error: "User no authenticated" })
        }
    } catch (error) {
        console.log(`Post images error: ${error}`)
        res.status(500).json({message: 'Internal server error'})
    }
}