const mongoose = require('mongoose');


let mongoConfig = () => {

    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.hyck63b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log('MongoDb Connected!'));

}

// mongodb+srv://ecom:SqC3l9x1NRNmmIpk@cluster0.hyck63b.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0

module.exports = mongoConfig