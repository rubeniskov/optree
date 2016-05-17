var expect = require("chai").expect;
var optree = require("..");

describe('Optree', function() {

    var json, obj;

    beforeEach(function() {
        json = {
            'foo': [
                'apple',
                'pear'
            ],
            'bar': {
                'apple': 0,
                'pear': 1
            },
            'first': {
                'second': {
                    'third': 'last'
                }
            }
        };
        obj = optree(json);
    });

    it('should has the right path structure', function() {
        expect(obj).to.have.property('foo.0');
        expect(obj).to.have.property('foo.1');
        expect(obj).to.have.property('bar.apple');
        expect(obj).to.have.property('bar.pear');
        expect(obj).to.have.property('first.second.third');
    });

    it('should has the values in data structure', function() {
        expect(obj['foo.0']).to.be.equal('apple');
        expect(obj['foo.1']).to.be.equal('pear');
        expect(obj['bar.apple']).to.be.equal(0);
        expect(obj['bar.pear']).to.be.equal(1);
        expect(obj['first.second.third']).to.be.equal('last');
    });

});
