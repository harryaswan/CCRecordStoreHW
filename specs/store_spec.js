var assert = require('chai').assert;
var Record = require('../record');
var Store = require('../store');

describe('Store', function() {
    beforeEach(function(){
        record1 = new Record('Elbow', 'Seldom Seen Kid', 9.99, 11111111);
        record2 = new Record('Train', 'Bulletproof Picasso', 3.99, 22222222);
        record3 = new Record('AC/DC', 'Black Ice', 4.05, 33333333);
        record4 = new Record('Vandaveer', 'Oh, Willie, Please...', 3, 44444444);
        store = new Store("Jimmy's Record Hut", "Edinburgh", record1, 50);
    });
    it('Has a name', function() {
        assert.equal("Jimmy's Record Hut", store.name);
    });
    it('Has a city', function() {
        assert.equal("Edinburgh", store.city);
    });
    it('Has a starting bank balance', function() {
        assert.equal(50, store.balance);
    });
    it("Has a single record as it's starting inventory", function() {
        assert.equal(1, store.stockLevels());
    });
    it("Can add a new record to the store", function() {
        store.addRecord(record2);
        assert.equal(2, store.stockLevels());
    });
    it("Can sell a record", function() {
        assert.equal(record1, store.sellRecord(record1));
        assert.equal(0, store.stockLevels());
    });
    it("Bank balance increases when selling a record", function() {
        store.sellRecord(record1);
        assert.equal(59.99, store.balance);
    });
    it("Can return a finacial status report", function() {
        assert.deepEqual({cash: 50, stock: 9.99}, store.report());
    });


});
