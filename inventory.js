var Record = require('./record');

var Inventory = function() {
    this.items = [];
};

Inventory.prototype = {
    addItem: function() {
        var args = arguments[0];
        for (var i = 0; i < args.length; i++) {
            this.items.push(args[i]);
        }


    },
    removeItem: function() {
        for (var i = 0; i < arguments.length; i++) {
            this.items.splice(this.items.indexOf(arguments[i]), 1);
        }
    },
    findItem: function(val) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].title === val) {
                return this.items[i];
            } else if (this.items[i].barcode === val) {
                return this.items[i];
            }
        }
    },
    buy: function(buyer, seller, item) {
        var r = seller.inventory.checkIfItem(item);
        if (r) {
            if (buyer.balance >= r.price) {
                buyer.addRecord(seller.sellRecord(r));
                buyer.balance -= r.price;
            }
        }
    },
    sell: function(seller, item) {
        var r = seller.inventory.checkIfItem(item);
        if (r) {
            seller.balance += r.price;
            return this.items.splice(this.items.indexOf(r), 1)[0];
        }
    },
    checkIfItem: function(item) {
        var r = item;
        if (!(item instanceof Record)) {
            r = this.findItem(item);
        }
        return r;
    },
    length: function() {
        return this.items.length;
    },
    list: function() {
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    },
    value: function() {
        var val = 0;
        for (var i = 0; i < this.items.length; i++) {
            val += this.items[i].price;
        }
        return val;
    }
};

module.exports = Inventory;
