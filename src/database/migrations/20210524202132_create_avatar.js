
exports.up = function(knex) {
    return knex.schema.createTable('avatar', function(table){
          table.increments('id').primary(),
          table.string('name').notNullable(),
          table.string('url').notNullable().default('https://image.shutterstock.com/image-vector/image-icon-trendy-flat-style-260nw-643080895.jpg'),
          table.integer('alunoId').references('id')
          .inTable('aluno').notNull()
          
      })
    };
    
    exports.down = function(knex) {
       return knex.schema.dropTable('avatar')
    };