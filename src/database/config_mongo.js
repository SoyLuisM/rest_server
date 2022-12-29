const mongoose = require('mongoose');

const cnn = process.env.MONGO_CNN;

const dbConnection = async() => {
    try {
        await mongoose.set('strictQuery', false);
        await mongoose.connect(cnn,{
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
        })
        
        console.log('Base de datos conectada');
    } catch (error) {
        console.error(error);
        throw new Error(`Error al conectar la base de datos mongoDB' ${error}`);
    }
}
module.exports = {
    dbConnection,
}