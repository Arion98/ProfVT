/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('livros',(table) =>{
    table.increments();
    table.string("nome",50).notNullable();
    table.string("cidade",30).notNullable();
    table.string("estado",3).notNullable();
    table.string("telefone",10).notNullable();
    table.string("rua",9).notNullable();
    table.string("cep",8).notNullable();
    })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
