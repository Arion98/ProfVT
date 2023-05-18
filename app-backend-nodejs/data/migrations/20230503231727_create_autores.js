/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('livros',(table) =>{
  table.increments();
  table.string("nome",80).notNullable();
  table.string("sobrenome",30).notNullable();
  table.string("idade",3).notNullable();
  table.string("data_nascimento",10).notNullable();
  table.string("sexo",9).notNullable();
  table.string("telefone",8).notNullable();
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("livros")
};
