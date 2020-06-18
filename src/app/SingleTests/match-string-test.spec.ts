describe('Testing the diferent between toBe and toEqual', () => { //Caso haja um x no começo, o teste nao e' executado, pode ser usado no describe ou no it
    it('Testing using toBe ( \' === \')', () => {
        const string: string = "testing"; //cada teste pode obter mais de um expect ( OBVIOOOO )
        expect(string).toBe("testing");
    })

    it('Testing using toBe ( \' === \') with not', () => {
        const string: string = "testing"; 
        expect(string).not.toBe("testing 2");
    })

    it('Testing using toEqual ( \' == \')', () => {
        const string: string = "testing";
        expect(string).toEqual("testing");
    })

    it('Testing using toEqual ( \' == \') with not', () => {
        const string: string = "testing";
        expect(string).not.toEqual("testing 2");
    })

    it('Testing using toContains', () => {
        const string: string = "if I'm testing this, I'm testing this finally";
        expect(string).toContain("finally");
    })

    it('Testing using toMatch', () => {
        const string: string = "testing";
        expect(string).toMatch("testing?");
    })
})