var Inventory = require('./inventory');

var Store = function(name, city, startingInventory, startingBalance) {
    this.name = name;
    this.city = city;
    this.inventory = new Inventory();
    this.balance = startingBalance;
    if (startingInventory) {
        this.addRecord(startingInventory);
    }
};

Store.prototype = {
    addRecord: function() {
        this.inventory.addItem(arguments);
    },
    stockLevels: function() {
        return this.inventory.length();
    },
    listInventory: function() {
        this.inventory.list();
    },
    findRecord: function(name) {
        return this.inventory.findItem(name);
    },
    sellRecord: function(record) {
        return this.inventory.sell(this, record);
    },
    buyRecord: function(record, seller) {
        this.inventory.buy(this, seller, record);
    },
    inventoryValue: function() {
        return this.inventory.value();
    },
    report: function() {
        return {cash: this.balance, stock: this.inventoryValue()};
    }
};

module.exports = Store;
