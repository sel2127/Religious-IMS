import db from '../config/Database.js';

export const create = (data, callBack) => {
    db.query(
        'insert into users(firstName, lastName, email, phone, password) values(?,?,?,?,?)',
        [
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.password
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
};
