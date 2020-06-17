import { addition } from "./firstFunction";

describe('Test addition', () =>{
    it('Testing addition function', () => {
        expect(addition(10,20)).toBe(30);
    })
});