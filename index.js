const app = require('./src/app');
const config = require('./config');

app.listen(config.port, () => {
  console.log(`Server is listening at port ${config.port}`);
});
