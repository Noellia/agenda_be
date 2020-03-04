const createModel = include('helpers/modelCreate');

const name = 'Assignment';
const tableName = 'Assignment';

const selectableProps = [
    'idContact',
    'idDepartment',
    'status'
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