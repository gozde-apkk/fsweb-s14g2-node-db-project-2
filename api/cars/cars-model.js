const db = require('../../data/db-config')

const getAll = () => {
  // HOKUS POKUS
  return db('Cars')
}

const getById = (carId) => {
  // HOKUS POKUS
  return db('Cars').where("id", carId).first();
}

const getByVin = (vin) => {
  returndb("cars").where("vin",vin).first();
}

const create = async(carEntity) => {
  // HOKUS POKUS
  const [id] = await db("Cars").insert(carEntity);
  return getById(id)
}
