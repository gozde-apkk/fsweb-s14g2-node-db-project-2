

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */



exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.shema.createTable("Cars" , tbl=>{
    tbl.increments();
    tbl.string("vin")
       .notNullable()
       .unique();

    tbl.string("make")
       .notNullable();
    tbl.string("model")
       .notNullable();
    tbl.integer()
      .notNullable();
    tbl.string("title");
    tbl.string("transmission");
    

  })

};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  //yok etmek
  return knex.schema.dropTableIfExists('Cars')
};
