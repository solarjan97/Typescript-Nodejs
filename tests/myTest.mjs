import {Reverse} from '../lib/index.js';
import {expect} from 'chai';


describe('Options tests', () => { // container
    it('empty option', () => {         
        expect(Reverse('')).to.equal('');
    });
    it('lowercase string without nums option', () => {         
        expect(Reverse('abc')).to.equal('CBA');
    });
    it('uppercase string without nums option', () => {         
        expect(Reverse('ABC')).to.equal('cba');
    });
    it('camelcase string without nums option', () => {         
        expect(Reverse('AbC')).to.equal('cBa');
    });
    it('numequalrs string option', () => {         
        expect(Reverse('123')).to.equal('321');
    });
    it('alphanum string option', () => {         
        expect(Reverse('AbC123aBc')).to.equal('CbA321cBa');
    });
    it('special chars option', () => {         
        expect(Reverse('_-@#$%^&*()')).to.equal('');
    });
    it('string with special chars option', () => {         
        expect(Reverse('Ab1#a')).to.equal('A1Ba');
    });
    it('option from email', () => {         
        expect(Reverse('abCD12')).to.equal('21dcBA');
    });
});
