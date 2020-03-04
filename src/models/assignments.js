const createModel = include('helpers/modelCreate');

const name = 'Assignment';
const tableName = 'Assignment';

const selectableProps = [
    'contact',
    'department',
    'createdAt',
    'updatedAt',
    'deletedAt',
    'deleted'
];

class AssignmentModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new AssignmentModel({knex});
