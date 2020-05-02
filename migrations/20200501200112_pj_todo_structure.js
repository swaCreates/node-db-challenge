
exports.up = function(knex) {
    return knex.schema
    .createTable('Project', tbl => {
        tbl.increments();
        tbl.text('pj_name', 128).notNullable();
        tbl.text('pj_desc', 128);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('Resource', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable().unique();
        tbl.text('resource_desc', 128);
    })
    .createTable('Task', tbl => {
        tbl.increments();
        tbl.integer('pj_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project');
        tbl.text('task_desc', 128).notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('Project_Plan', tbl => {
        tbl.integer('pj_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project')
        .onDelete('CASCADE');
        tbl.integer('res_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Resource')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Project_Plan')
    .dropTableIfExists('Task')
    .dropTableIfExists('Resource')
    .dropTableIfExists('Project');
};
