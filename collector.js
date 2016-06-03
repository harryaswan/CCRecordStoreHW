var Record = require('./record');

var Collector = function(name, startingBalance) {
    this.name = name;
    this.balance = startingBalance;
    this.inventory = [];
};

Collector.prototype = {
    addRecord: function() {
        for (var i = 0; i < arguments.length; i++) {
            this.inventory.push(arguments[i]);
        }
    },
    findRecord: function(name) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].title === name) {
                return this.inventory[i];
            }
        }
    },
    buy: function(record_title, store) {
        var record = store.findRecord(record_title);
        if (this.balance >= record.price) {
            this.addRecord(store.sellRecord(record));
            this.balance -= record.price;
        }
    },
    sell: function(record) {
        var r = record;
        if (!(record instanceof Record)) {
            r = this.findRecord(record);
        }
        this.balance += r.price;
        return this.inventory.splice(this.inventory.indexOf(r), 1)[0];
    }
};

module.exports = Collector;
