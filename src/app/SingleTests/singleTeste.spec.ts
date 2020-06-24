import { async, ComponentFixture, TestBed } from '@angular/core/testing';
xdescribe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeEach(async(() => {
      contador++;
    }));
    
    afterAll(async(() => {
        contador--;
    }));

    it('Primeiro teste', () => {
      expect(contador).toBe(1)
    })
    
    it('Segundo teste', () => {
        expect(contador).toBe(2)
    })
    
  })