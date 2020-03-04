const createModel = include('helpers/modelCreate');

const name = 'Contact';
const tableName = 'contact';

const selectableProps = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'birthDate',
    'phoneNumber',
    'address',
    'role',
    'note',
    'status'
];

class ContactModel extends createModel {
    constructor (props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new ContactModel({knex});
