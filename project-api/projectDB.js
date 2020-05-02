const db= require('../data/db_config.js');

module.exports= {
    fetch,
    create,
    getResources,
    addResource,
    getTasks,
    addTask,
}

function fetch(){
    return db('Project');
};

function create(newProject){
    return db('Project')
        .insert(newProject);
};

function getResources(pj_id){
    return db.select('name', 'resource_description')
        .from('Project_Task')
        .join('Resource', 'Resource.id', 'Project_Task.res_id')
        .where('Project_Task.pj_id', pj_id);
};

function addResource(newResrc, pj_id){
    return db.select('name', 'resource_description')
        .from('Resource')
        .insert(newResrc)
        .join('Project_Task', 'Project_Task.res_id', 'Resource.id')
        .join('Project', 'Project.id', 'Project_Task.id')
        .where('Project_Task.pj_id', pj_id);
};

function getTasks(pj_id){

};

function addTask(pj_id){

};

// ('Resource')
//         .join('Project_Task',)
//         .insert(newResrc)
//         .where('')