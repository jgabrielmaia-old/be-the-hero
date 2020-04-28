const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {
        const randomBytes = 4;
        const id = generateUniqueId(randomBytes);
        expect(id).toHaveLength(8);
    })
});