
exports.up = function(knex) {
    return knex.schema.createTable('aluno', function(table){
          table.increments('id').primary(),
          table.string('name').notNullable(),
          table.string('city').notNullable()
    
      })
    };
    
    exports.down = function(knex) {
       return knex.schema.dropTable('aluno')
    };
    
