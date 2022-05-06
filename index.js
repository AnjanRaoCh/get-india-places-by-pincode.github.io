// const {PincodeArray} = require('./allpincodes');
 const PincodeArray= require('./allpincodes');
function getindianplacesonpincodes(pincode) {
    if (typeof pincode == 'number'  & pincode.toString().length == 6 ) {
        const Places  = PincodeArray.filter((element) =>  {
            return element.Pincode == pincode
         })
         if(Places.length==0) {
            return {status:403, resultStaus:false,"message":"No Locations Found"} 
         }
         else {
            return {status:200, resultStaus:false, result:Places,"message":Places.length+ " Locations Found"}  
         }
        //  return Places.length;
    }
    else {
        return {statusCode:404,resultStaus:false,"message":"Please Enter Valid Indian Pincode"}
    }
}
module.exports = getindianplacesonpincodes