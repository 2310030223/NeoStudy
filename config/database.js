const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to Database:', error.message);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
};

