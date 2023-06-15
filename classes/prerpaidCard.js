

class PrepaidCardClass {
    async submitBasicData (userId, savedUserDetails){
        try{

            logger.info(`PrepaidCardClass - submitBasisData - userId:${userId} - savedUserData :${savedUserDetails}`)
            // add the data to DB;
            const userDetails = await PrepaidCardModel.findOneAndUpdate({userId},{
                $set:{
                    "userDetails.fullName":savedUserDetails.fullName,
                    "userDetails.dob":savedUserDetails.dob,
                    "contactDetails.phoneNumber":savedUserDetails.phoneNumber
                }
            });
            logger.info(`PrepaidCardClass - submitBasisData - userId:${userId} - updatedresponse :${userDetails}`)
            return {
                message:"User is saved successfully"
            }
    
        }catch(error){
            logger.error(`PrepaidCardClass - submitBasisData - error:${error} `)
             throw error;
        }
    }
}

export default PrepaidCardClass;