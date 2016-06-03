var assert = require('chai').assert;
var Record = require('../record');

describe('Record', function() {
    beforeEach(function(){
        record = new Record('Elbow', 'Seldom Seen Kid', 9.99, 11111111);
    });
    it('Has a name', function() {
        assert.equal('Elbow', record.name);
    });
    it('Has a title', function() {
        assert.equal('Seldom Seen Kid', record.title);
    });
    it('Has a price', function() {
        assert.equal(9.99, record.price);
    });
    it('Has a barcode', function() {
        assert.equal(11111111, record.barcode);
    });
});
