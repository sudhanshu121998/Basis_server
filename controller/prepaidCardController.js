import PrepaidCardClass from "../classes/prerpaidCard"
import logger from "../utils/logger";


export async function submitBasicData (req,res){
    try{
        const userId = req.header();
        logger.info(`PrepaidCardController - submitBasisData - userId:${userId} - savedUserData :${req.body.savedUserData}`)
        
        const prepaidObj = new PrepaidCardClass();
        const response = prepaidObj.submitBasicData(userId,req.body.savedUserData)
        logger.debug(`PrepaidCardController - submitBasisData - userId:${userId} - response:${response}`)
        res.send(response);

    }catch(error){
        logger.error(`PrepaidCardController - submitBasisData - error:${error} `)
        throw error;
    }

}