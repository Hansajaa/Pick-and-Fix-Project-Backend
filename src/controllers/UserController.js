const userRepository = require('../repository/UserRepository');
const User = require('../model/entity/User');
const logger = require('../logger/LoggerFactory');
const Response = require('../model/response/pick-and-fix-response');
const statusCode = require('../model/response/status-code');


SUCCESS_SERVER_GET_DATA_MSG = 'Successfully processed request to get User data';
FAILED_SERVER_GET_DATA_MSG = 'Error occurred while processing request to get User data';
SUCCESS_SERVER_POST_DATA_MSG = 'Successfully processed request to post User data';
FAILED_SERVER_POST_DATA_MSG = 'Error occurred while processing request to post User data';
SUCCESS_SERVER_PUT_DATA_MSG = 'Successfully processed request to put User data';
FAILED_SERVER_PUT_DATA_MSG = 'Error occurred while processing request to put User data';

const insertUser = async (request, response) => {

    try{
        logger.info("Recieved request to insert user");
        const user = request.body;

        const newUser = new User({
            userName: user.userName,
            address: user.address,
            contactNumber: user.contactNumber,
            email: user.email,
            password: user.password,
            role: user.role,
        })

        await userRepository.createUser(newUser);
        logger.success(SUCCESS_SERVER_POST_DATA_MSG);
        response.status(statusCode.SUCCESS).send(Response.pickAndFixResponse(statusCode.SUCCESS, SUCCESS_SERVER_POST_DATA_MSG, newUser));
    }catch(error){
        logger.error(FAILED_SERVER_POST_DATA_MSG);
        response.status(statusCode.INTERNAL_SERVER_ERROR).send(Response.pickAndFixResponse(statusCode.INTERNAL_SERVER_ERROR, FAILED_SERVER_POST_DATA_MSG, undefined));
    }
}


const checkUsername = async (request, response) => {

    try{
        logger.info("Recieved request to Check username");
        const userName = request.query.userName;

        const res = await userRepository.checkUsername(userName);
        if(res){
            logger.success(SUCCESS_SERVER_GET_DATA_MSG);
            response.status(statusCode.SUCCESS).send(Response.pickAndFixResponse(statusCode.SUCCESS, SUCCESS_SERVER_GET_DATA_MSG, true));
        }else{
            logger.info(SUCCESS_SERVER_GET_DATA_MSG);
            response.status(statusCode.SUCCESS).send(Response.pickAndFixResponse(statusCode.SUCCESS, SUCCESS_SERVER_GET_DATA_MSG, false));
        }
    }catch(error){
        logger.error(FAILED_SERVER_GET_DATA_MSG);
        response.status(statusCode.INTERNAL_SERVER_ERROR).send(Response.pickAndFixResponse(statusCode.INTERNAL_SERVER_ERROR, FAILED_SERVER_GET_DATA_MSG, false));
    }
}

module.exports.insertUser = insertUser;
module.exports.checkUsername = checkUsername;


