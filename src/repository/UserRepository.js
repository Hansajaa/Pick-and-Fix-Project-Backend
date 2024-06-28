const logger = require('../logger/LoggerFactory');

const createUser = async (user) => {

    try{
        const r = await user.save();
        if(await r){
            logger.info("Successfully Insert a user data into the database");
            return 1
        }
    }catch(error){
        console.log("Error in insert user");
        throw error;
    }
}


module.exports.createUser = createUser;