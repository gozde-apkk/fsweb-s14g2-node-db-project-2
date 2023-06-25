const carModel = require("./cars-model");
const vinValidator = require("vin-validator")


const checkCarId = async(req, res, next) => {
  // HOKUS POKUS
  try{
    const isExistCar = await carModel.getById(req.params.id);
    if(!isExistCar){
      res.status(404).json({message:`${req.params.id} kimliğine sahip araba bulunmadı`})
    }else{
      req.existCar = isExistCar;
    }

  }catch (error){
     next(error)
  }
}


function isContain(param,array){
  for(let i=0; i<array.length; i++){
    if(array[i] ==param){
      return true;
    }

    return false;
  }
}

const checkCarPayload = (req, res, next) => {
  // HOKUS POKUS
  try{
      const allFields = ["make","vin","model","mileage"]
      const missingFields= [];
      for (let i in req.body()){
      let isContain = allFields.includes(i);
      if(!isContain && !req.body[i]){
        missingFields.push(i);

      }
    }
    if(missingFields.length>0){
      res.status(400).json({message:`${missingFields.toString()} ${missingFields.length == 1 ? "is"
    :"are"} missing `})
    }
  }catch (error){

  }
}

const checkVinNumberValid = (req, res, next) => {
  // HOKUS POKUS
  try{
    let isValidVin = vinValidator.validate(req.body.vin);
    if(!isValidVin){
      res.status(400).json({message:`vin ${req.body.vin} is inValid`})
    }else{
      next()
    }
  }catch(error){
    next(error);
  }
}

const checkVinNumberUnique =async (req, res, next) => {
  // HOKUS POKUS

  try{
    let isExistVin = await carModel.getByVin(req.params.vin)
    if(!isExistVin){
      res.status(400).json({message:`vin ${req.params.vin} already exist`})
    }
  }catch(error){
    next(error);
  }
}

module.exports = {
  checkCarId,
  isContain,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
