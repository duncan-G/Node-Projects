'use strict';

const graphql = require('graphql'),
      { GraphQLSchema, GraphQLObjectType } = graphql;

var TaskQueryType = require('./queries');
var TaskMutation = require('./mutations');

module.exports =  new GraphQLSchema({
  query: TaskQueryType,
  mutation: TaskMutation
});