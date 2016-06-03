var Record = require('./record');

var Store = function(name, city, startingInventory, startingBalance) {
    this.name = name;
    this.city = city;
    this.stock = [];
    this.balance = startingBalance;
    if (startingInventory) {
        this.addRecord(startingInventory);
    }
};

Store.prototype = {
    addRecord: function() {
        for (var i = 0; i < arguments.length; i++) {
            this.stock.push(arguments[i]);
        }
    },
    stockLevels: function() {
        return this.stock.length;
    },
    listInventory: function() {
        for (var i = 0; i < this.stock.length; i++) {
            console.log(this.stock[i]);
        }
    },
    findRecord: function(name) {
        for (var i = 0; i < this.stock.length; i++) {
            if (this.stock[i].title === name) {
                return this.stock[i];
            }
        }
    },
    sellRecord: function(record) {
        var r = record;
        if (!(record instanceof Record)) {
            r = this.findRecord(record);
        }
        this.balance += r.price;
        return this.stock.splice(this.stock.indexOf(r), 1)[0];
    },
    buyRecord: function(recordI, seller) {
        var record = seller.findRecord(recordI);
        if (this.balance >= record.price) {
            this.addRecord(seller.sell(record));
            this.balance -= record.price;
        }
    },
    returnRecord: function(record) {
        this.balance -= record.price;
        this.addRecord(record);
    },
    inventoryValue: function() {
        var val = 0;
        for (var i = 0; i < this.stock.length; i++) {
            val += this.stock[i].price;
        }
        return val;
    },
    report: function() {
        return {cash: this.balance, stock: this.inventoryValue()};
    }
};

module.exports = Store;
