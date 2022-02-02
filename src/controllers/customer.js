const { connection } = require("../../database/connection");

const getAll = (req, res) => {
    connection.query("SELECT * FROM customers", (err, result) => {
        if (err) {
            res.json(err);
            throw err;
        }
        res.render("customer", {
            data: result,
            title: "Clientes",
        });
    });
};

const postCustomer = (req, res) => {
    const newCustomer = req.body;

    connection.query("INSERT INTO customers SET ?", [newCustomer], (err) => {
        if (err) {
            res.json({ msg: "error creating customer" });
            throw err;
        }
        res.redirect("/");
    });
};

const deleteCustomer = (req, res) => {
    const idOfCustomer = req.params.id;

    connection.query(
        "DELETE FROM customers WHERE customer_id = ?",
        [idOfCustomer],
        (err, result) => {
            if (err) {
                res.json({ msg: "error deleting customer" });
                throw err;
            }
            res.redirect("/");
        }
    );
};

const updateCustomer = (req, res) => {
    const idOfCustomer = req.params.id;

    connection.query(
        "SELECT * FROM customers WHERE customer_id = ?",
        [idOfCustomer],
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render("edit_customer", {
                data: result[0],
                title: "Clientes",
            });
        }
    );
};

const saveCostumer = (req, res) => {
    const idOfCustomer = req.params.id;
    const updatedCustomer = req.body;

    connection.query(
        "UPDATE customers SET ? WHERE customer_id = ?",
        [updatedCustomer, idOfCustomer],
        (err) => {
            if (err) {
                res.json({ msg: "error updating customer" });
                throw err;
            }
            res.redirect("/");
        }
    );
};

module.exports = {
    getAll,
    postCustomer,
    deleteCustomer,
    updateCustomer,
    saveCostumer,
};
