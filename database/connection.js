const mysql = require("mysql");

const connection = mysql.createConnection(
    "mysql://ubxc9gzpn3ox1pnx:Y0ZRVVZKfWuG2mQ7gbtl@bnl6qrhvj7jm0oqskulu-mysql.services.clever-cloud.com:3306/bnl6qrhvj7jm0oqskulu"
);

connection.connect((err) => {
    if (err) {
        throw err;
    }
});

module.exports = { connection };
