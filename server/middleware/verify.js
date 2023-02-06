import jwt from 'jsonwebtoken'

const secret = 'secret'

const auth = async (req, res, next) => {
    console.log('doing the auth')
    const token = req.headers.authorization.split(" ")[1];

    if (token==null) return res.status(401)



    jwt.verify(token,secret ,(err,user) =>{
      if (err) return res.status(403)
      req.user = user  
      next()
    })
}

export default auth