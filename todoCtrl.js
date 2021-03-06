var knex = require('./db/knex');

module.exports = {
    getAll,
    getOne,
    addOne,
    changeOne,
    deleteOne
};

function getAll(req, res){
    knex.select()
        .from('todos')
        .then(todos => res.send(todos));
}

function getOne(req, res){
    knex.select()
        .from('todos')
        .where('id', req.params.id)
        .then(() => {
            knex.select()
                .from('todos')
                .then( todo => res.send(todo));
        })
}

function addOne(req, res){
    knex('todos').insert({
        title: req.body.title
    }).then(() => {
        knex.select()
        .from('todos')
        .then(todos => res.send(todos));
    })
}

function changeOne(req, res){
    knex('todos').where('id', req.params.id)
                .update({
                    compeleted: req.body.compeleted
                }).then(() => {
                    knex.select()
                        .from('todos')
                        .then(todos => res.send(todos));
                    })
}

function deleteOne(req, res){
    knex('todos').where('id', req.params.id)
                .del()
                .then(() => {
                    knex.select()
                        .from('todos')
                        .then( todos => res.send(todos));
                });

}