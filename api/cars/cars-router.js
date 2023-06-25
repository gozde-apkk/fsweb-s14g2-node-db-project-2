// HOKUS POKUS

const router =require("express").Router();
const carModel = require ("./cars-model");

router.get("/", async (req,res,next) => {
    try{
       const allCars = await carModel.getAll();
       res.json(allCars)
    }catch(error){
        next(error);
    }
});

router.get("/:id" , async(req,res,next)=>{
    try{
       res.json(req.existCar)
    }catch(error){
        next(error);
    }
});

router.post("/", mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique , async(req,res,next)=>{
    try{
        const insertedCar = await carModel.create(req.body);
        res.status(201),json(insertedCar);

    }catch(error){
        next(error);
    }
})