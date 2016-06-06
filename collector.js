var Inventory = require('./inventory');

var Collector = function(name, startingBalance) {
    this.name = name;
    this.balance = startingBalance;
    this.inventory = new Inventory();
};

Collector.prototype = {
    addRecord: function() {
        this.inventory.addItem(arguments);
    },
    findRecord: function(name) {
        return this.inventory.findItem('title', name);
    },
    buyRecord: function(record_title, store) {
        this.inventory.buy(this, store, record_title);
    },
    sellRecord: function(record) {
        return this.inventory.sell(this, record);
    }
};

module.exports = Collector;
