'use strict';

const graphql = require('graphql'),
      { GraphQLObjectType, GraphQLString } = graphql;

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        created_date: { type: GraphQLString },
        status: { type: GraphQLString }
    })
})

module.exports = TaskType