const connectionString = "mongodb+srv://shadowleafdance:lKpKmzfuviMPGC9g@cluster0.kdjsifw.mongodb.net/Marketplace?retryWrites=true&w=majority";

const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || connectionString ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject'
    }
    export default config
   