const config = require('../../config');

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.clientDomain);
  res.header("Access-Control-Allow-Headers", config.cors.allowedHeaders);
  next();
}

module.exports = cors;
