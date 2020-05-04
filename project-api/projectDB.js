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

function fetchById(id) {
    return db('Project')
      .where({ id })
      .first();
  }

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


// finish this logic
function addResource(newResrc, pj_id){
    return db('Resource')
        .insert(newResrc)
        .then(token => {
            return db('Project_Plan')
                .insert({
                    pj_id: pj_id,
                    res_id: token[0]
                });
        });      
};

function getTasks(pj_id){
    return db.select('task_desc', 'notes')
        .from('Task')
        .join('Project', 'Project.id', 'Task.pj_id')
        .where('Task.pj_id', pj_id);
};

function addTask(newTask, pj_id){
    return db('Task')
        .insert(newTask)
}; // how to make this function more perfomant