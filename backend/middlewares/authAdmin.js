import jwt from 'jsonwebtoken'



//admin authentication middleware
const authAdmin = (req,res,next) => {
    try {

        const {atoken} = req.headers
        
        if (!atoken) {
            return res.json({successs:false, message:'Not Auth Login Again'})
            
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)



        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({successs:false, message:'Not Auth Login Again'})
        }

        next()


    } catch (error) {
        console.log(error)
        res.json({successs:false, message:error.message})
    }
}


export default authAdmin;