const app = require('./app');

PORT = process.env.PORT || 3000;
HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST);