describe('Array test', () => {
    it('Testing Array using "toEqual", array contents should be equal', () => {
        const a = [2,4,8];
        expect(a).toEqual([2,4,8]);
    });

    it('Testing Array using "toContains", array should contain specific number', () => {
        const a = [2,4,8];
        expect(a).toContain(4);
    });
});