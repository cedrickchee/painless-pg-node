const Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection.production);

Model.knex(knexConnection);

class Comment extends Model {
    static get tableName() {
        // static getter method.
        // static and get were added in ES6. static methods aren't called on
        // instances of the class. Instead, they're called on the class itself.
        //
        // The name of the database table we want our Comment class to model.
        return 'comments';
    }

    static get relationMappings() {
        return {
            idea: {
                // The relation key within this child object says that each
                // comment is going to have one parent idea.
                relation: Model.BelongsToOneRelation,

                // The modelClass says that the idea is coming from the Idea
                // model and then the join specifies the database table and
                // column names to perform a SQL join on.
                modelClass: Idea,
                join: {
                    from: 'comments.ideas_id',
                    to: 'ideas.id'
                }
            }
        }
    }
}

class Idea extends Model {
    static get tableName() {
        return 'ideas';
    }

    static get relationMappings() {
        return {
            comments: {
                // One idea can have multiple comments.
                relation: Model.HasManyRelation,

                modelClass: Comment,
                join: {
                    from: 'ideas.id',
                    to: 'comments.ideas_id'
                }
            }
        }
    }
}

module.exports = {
    Idea,
    Comment
};
