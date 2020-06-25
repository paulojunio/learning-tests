import { SquarePipe } from './square.pipe';
import { async } from 'rxjs/internal/scheduler/async';

fdescribe('SquarePipe', () => {
  let pipe: SquarePipe;
  beforeEach(async() => {
    pipe = new SquarePipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('if value is a number, the pipe return the square', () => {
    const value = 10;
    const powValue = Math.pow(value, 2)
    const returnPipe = pipe.transform(value);
    expect(returnPipe).toEqual(powValue);
  })

  it('if value isn\'t a number, the pipe return \'Not a number\'', () => {
    const value = 'not a number';
    const returnPipe = pipe.transform(value);
    expect(returnPipe).toEqual('Not a number');
  })

});
