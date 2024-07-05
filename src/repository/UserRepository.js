const logger = require('../logger/LoggerFactory');
const User = require('../model/entity/User');

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

const checkUsername = async (userName) => {

    try{
        const res = await User.findOne({userName});
        if(!res){
            return false;
        }else{
            return true;
        }
    }catch(error){
        console.log("Error in insert user");
        throw error;
    }
}


module.exports.createUser = createUser;
module.exports.checkUsername = checkUsername;