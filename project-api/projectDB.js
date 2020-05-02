const db= require('../data/db_config.js');

module.exports= {
    fetch,
    create,
}

function fetch(){
    return db('Project');
};

function create(newProject){
    return db('Project')
        .insert(newProject);
};

function getResources(pj_id){

};

function addResources(pj_id){

};

function getTasks(pj_id){

};

function addTasks(pj_id){

};