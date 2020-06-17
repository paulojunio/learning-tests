xdescribe('toBe vs toEqual', () => { 
    it('should test "toBe" matcher', () => {
        let a = {
            val: 123
        };
        let b = {
            val: 123
        };
        expect(a).toBe(b);
    })

    it('should test "toEqual" matcher', () => {
        let a = {
            val: 123
        };
        let b = {
            val: 123
        };
        expect(a).toEqual(b);
    })
})