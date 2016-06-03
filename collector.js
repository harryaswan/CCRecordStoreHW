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
    buy: function(record_title, store) {
        console.log(record_title);
        var record = store.findRecord(record_title);
        if (this.balance >= record.price) {
            this.addRecord(store.sellRecord(record));
            this.balance -= record.price;
        }
    }
};

module.exports = Collector;
