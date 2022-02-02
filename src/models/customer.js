module.exports = class Costumer {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    createCustomer() {
        return {
            name: this.name,
            address: this.address,
            phone: this.phone,
        };
    }
};
