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
        // var record = store.findRecord(record_title);
        // if (this.balance >= record.price) {
        //     this.addRecord(store.sellRecord(record));
        //     this.balance -= record.price;
        // }
    },
    sellRecord: function(record) {
        return this.inventory.sell(this, record);
        // var r = record;
        // if (!(record instanceof Record)) {
        //     r = this.findRecord(record);
        // }
        // this.balance += r.price;
        // return this.inventory.splice(this.inventory.indexOf(r), 1)[0];
    }
};

module.exports = Collector;
