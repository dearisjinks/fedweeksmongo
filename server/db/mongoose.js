var mongoose = require('mongodb');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL);


module.exports = {
    mongoose
}