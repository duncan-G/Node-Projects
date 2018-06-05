'use strict';

const {  GraphQLNonNull, GraphQLString, GraphQLInputObjectType, GraphQLObjectType } = require('graphql');
const TaskType = require('./types');
const resolvers = require('./resolvers');

const TaskInputType = new GraphQLInputObjectType({
    name: 'TaskInput',
    description: 'Input user payload',
    fields: () => ({
        name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      created_date: {
        type: GraphQLString,
      },
      status: {
        type: GraphQLString,
      },
    }),
});

const TaskMutation = new GraphQLObjectType({
    name: 'TaskMutation',
    fields: {
      createTask: {
        type: TaskType,
        args: {
          input: {
              type: new GraphQLNonNull(TaskInputType)
          }
        },
        resolve: async (root, { input }) => {
            if (!input.name) {
                throw new Error('Must provide a name for task');
            };
            return resolvers.create_a_task(input);
        }
      }
    }
});

module.exports = TaskMutation