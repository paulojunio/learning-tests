import { ParameterPipePipe } from './parameter-pipe.pipe';

fdescribe('ParameterPipePipe', () => {
  let pipe: ParameterPipePipe;
  beforeEach(async() => {
    pipe = new ParameterPipePipe();
  })
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('if pipe recive \'duplicate\' return duplicate the value', () => {
    const test = 'Teste';
    expect(pipe.transform('Teste', 'duplicate')).toEqual(`${test}, ${test}`);
  });

  it('if pipe recive \'triple\' return triple the value', () => {
    const test = 'Teste';
    expect(pipe.transform('Teste', 'triple')).toEqual(`${test}, ${test}, ${test}`);
  });

  it('if pipe recive \'differente value\' return the value', () => {
    const test = 'Teste';
    expect(pipe.transform('Teste', 'test')).toEqual(`${test}`);
  });

});
