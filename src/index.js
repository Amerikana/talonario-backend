const app = require('./app');
require('./config/database');

app.listen(4000, console.log('server running on port 4000'));
