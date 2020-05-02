
exports.up = function(knex) {
    return knex.schema
    .createTable('Project', tbl => {
        tbl.increments();
        tbl.text('pj_name', 128).notNullable();
        tbl.text('pj_description', 128);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('Resource', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable().unique();
        tbl.text('resource_description', 128);
    })
    .createTable('Task', tbl => {
        tbl.increments();
        tbl.text('task_description', 128).notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('Project_Task', tbl => {
        tbl.integer('pj_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project');
        tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Task');
        tbl.integer('res_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Resource');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Project_Task')
    .dropTableIfExists('Task')
    .dropTableIfExists('Resource')
    .dropTableIfExists('Project');
};
