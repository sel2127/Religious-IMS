export  function isAutenticated(req, res, next) {
    let token;
    if (req.cookies.accessToken) {
       token=req.cookies.accessToken
      //  console.log("middleware",token)
    }else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  
    if (!token) {
          return res.status(401).json({ message: 'Access Denied' });
        }
    try {
          const decoded = jwt.verify(token,'6617171');
          req.user = decoded;
          console.log("dec",decoded.userId)
          const uid=decoded.userId 
          const users = Users.findOne({ where: {id:uid } });
          if (!users) {
            return res.status(404).json({
              success: false,
              message: "User does not exist",
            });
          }
          
          next();
        } catch (error) {
          console.log(error);
          return res
            .status(500)
            .json({ success: false, message: "Server error!", error: error.message });
        }
  }