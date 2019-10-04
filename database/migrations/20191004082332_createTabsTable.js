
exports.up = function (knex) {
    return knex.schema
      .createTable('tabs', (table) => {
        table.increments();
        table.string('url')
          .notNullable();
        table.string('title')
        table.blob('description');
        table.string('image');
        table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('tabs');
  };
  