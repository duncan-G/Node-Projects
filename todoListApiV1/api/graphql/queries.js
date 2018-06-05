'use strict';

const mongoose = require('mongoose'),
      Task = mongoose.model('Tasks');

const graphql = require('graphql'),
      TaskType = require('./types'),
      resolvers = require('./resolvers'),
      { GraphQLObjectType, GraphQLString } = graphql;

const TaskQueryType = new GraphQLObjectType({
    name: 'taskQuery',
    fields: {
        task: {
            type: TaskType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(root, args) {
                if (args && args.id){
                    return resolvers.read_a_task(args.id);
                } else {
                    return resolvers.list_all_tasks();
                };  
            }
        }
    }
});

module.exports = TaskQueryType;