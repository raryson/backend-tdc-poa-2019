const config = {
  port: 8080 || process.env.PORT,
  clientDomain: 'http://localhost:3000',
  cors: {
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
  }
}

module.exports = config;
