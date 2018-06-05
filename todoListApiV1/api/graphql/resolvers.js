'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');


exports.list_all_tasks = () => {
    Task.find({}, (err, tasks) => {
        if (err) {
            throw(err);
        }
        return tasks
    });
}

exports.create_a_task = (validatedInput) => {
    var new_task = new Task(validatedInput);
    new_task.save((err, task) => {
        if (err) {
            throw(err);
        }
        return task
    });
};

exports.read_a_task = (taskId) => {
    Task.findById(taskId, (err, task) => {
        if (err) { 
            throw(err);
        };
        return task
    });
};

exports.update_a_task = (taskId, validatedInput) => {
    Task.findOneAndUpdate({_id: taskId}, validatedInput, {new: true}, (err, task) => {
        if (err) { 
            throw(err);
        };
        return task
    });
};

exports.delete_a_task = (taskId) => {
    Task.remove({_id: taskId}, (err, task) => {
        if (err) { 
            throw(err);
        };
        return { message: 'Task successfully deleted' }
    });
};