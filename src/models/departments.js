const createModel = include('helpers/modelCreate');

const name = 'Department';
const tableName = 'Department';

const selectableProps = [
    'idDepartment',
    'description',
    'status'
];

class DepartmentModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new DepartmentModel({knex});