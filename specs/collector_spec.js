var assert = require('chai').assert;
var Record = require('../record');
var Store = require('../store');
var Collector = require('../collector');

describe('Collector', function() {
    beforeEach(function(){
        record1 = new Record('Elbow', 'Seldom Seen Kid', 9.99, 11111111);
        record2 = new Record('Train', 'Bulletproof Picasso', 3.99, 22222222);
        record3 = new Record('AC/DC', 'Black Ice', 4.05, 33333333);
        record4 = new Record('Vandaveer', 'Oh, Willie, Please...', 3, 44444444);
        store = new Store("Jimmy's Record Hut", "Edinburgh", record1, 50);
        collector = new Collector('Gavin', 20);
    });
    it('Has a name', function() {
        assert.equal("Gavin", collector.name);
    });
    it('Has a bank balance', function() {
        assert.equal(20, collector.balance);
    });
    it('Can buy a record from the store', function() {
        store.addRecord(record2, record3, record4);
        store.listInventory();
        collector.buy("Black Ice", store);
        assert.equal(15.95, collector.balance);
    });
});
