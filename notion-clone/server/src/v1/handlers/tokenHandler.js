const JWT = require("jsonwebtoken");
const User = require("../models/user");

//クライアントから渡されたトークンが正常かの検証
const tokenDecode = (req) => {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ")[1];
    try {
      const decodedToken = JWT.verify(bearer, process.env.TOKEN_SECRET_KEY);
      return decodedToken;
    } catch {
      return false;
    }
  } else {
    return false;
  }
};

//トークン認証関数(ミドルウェアとして利用)
exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);

  if (tokenDecoded) {
    //そのトークンと一致するユーザーを探してくる。
    const user = await User.findById(tokenDecoded.id);
    if (!user) return res.status(401).json("権限がありません");
    req.user = user;
    next();
  } else {
    res.status(401).json("権限がありません");
  }
};
