
exports.up = function(knex) {
    return knex.schema.createTable('aluno', function(table){
          table.increments('id').primary(),
          table.string('name').notNullable(),
          table.string('city').notNullable()
          table.string('url').notNullable().default('https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722')
          table.string('avatarName').notNullable().default('Default')
    
      })
    };
    
    exports.down = function(knex) {
       return knex.schema.dropTable('aluno')
    };
    
