import jwt from 'jsonwebtoken'

const secret = 'secret'

const auth = async (req, res, next) => {
  console.log('begin auth')
   const token = req.headers.authorization.split(" ")[1];
    console.log(token)
  console.log('1')
    if (token===null) return res.status(401)

  console.log('2')

    jwt.verify(token,secret ,(err,user) =>{
              console.log('nexting')
      if (err) return res.status(403).json({message:err.message})
      req.user = user  
      console.log('nexting')
      next()
    })
}

export default auth