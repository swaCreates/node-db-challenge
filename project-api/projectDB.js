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
    return db.select('name', 'resource_desc')
        .from('Project_Plan')
        .join('Resource', 'Resource.id', 'Project_Plan.res_id')
        .where('Project_Plan.pj_id', pj_id);
};

function addResource(newResrc, pj_id){
    return db('Resource')
        .insert(newResrc)
};

function getTasks(pj_id){

};

function addTask(pj_id){

};

// ('Resource')
//         .join('Project_Task',)
//         .insert(newResrc)
//         .where('')