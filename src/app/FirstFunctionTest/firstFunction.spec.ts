import { addition } from "./firstFunction";

describe('Test addition', () =>{
    it('Testing addition function', () => {
        expect(addition(10,20)).toBe(30); //todos os testes devem termina com expect ( obvio, porem e' bom lembra!!! )
    })
});