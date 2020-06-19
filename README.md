# Angular - Testes unitarios 
Este repositório tem como objetivo contemplar o funcionamento de testes unitários no front-end ( AngularJs ), 
utilizando o Jasmine e o Karma

### Jasmine 

O [Jasmine](https://jasmine.github.io/) é um framework criado com o objetivo de fazer testes em Javascript, ele é independente de qualquer outro framework para funcionar.

### Karma 

O [Karma](https://angular.io/guide/testing) é um test runner criado pelo Angular Team, com o principal objetivo de automatizar os testes em diversos navegadores web com um único comando ( ng test ). 


# Conceitos - Jasmine

### Suites 

Suítes tem como objetivo agrupar os testes de uma determinado componente. Nele possui dois parâmetros, o primeiro é uma breve explicação do que será testado, o segundo é uma função que agrupa todos as configurações de teste e os testes que serão executados.
OBS: O ideal é que tenha somente um describe para cada classe de teste!

###### Exemplo
```typescript
describe('Explicação breve do componente que será testado', () => {
  //Teste e configurações dos testes ficaram aqui dentro!
})
```

### Specs 

Specs ou testes, são literalmente os testes que serão feitos em cima do componente, também possuem dois parâmetros, o primeiro é uma breve explicação do teste que será realizado e o segundo parâmetro é uma função onde ficará o teste descrito.

###### Exemplo
```typescript
describe('Explicação breve do componente que será testado', () => {
  it('Explicação do que será testado', () => {
    //Teste ficará aqui!
  })
})
```
### Desabilitando Suites ou Specs

Caso queira desabilitar algum suíte ou algum teste em específico, é só colocar a letra **X** na frente de cada diretiva.

###### Exemplo
```typescript
xdescribe('Nenhum teste desse suíte será executado!', () => {
  xit('Esse teste não sera executado!', () => {
  
  })
})
```

### Configuração e desmontagem

#### BeforeEach e BeforeAll

Essas duas diretivas executaram algum código antes dos testes serem executados, porém cada uma com sua peculiaridade. O **BeforeEach** como o nome ja diz, **antes de cada teste ser executado** ele é chamado.

###### Exemplo
```typescript
describe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeEach(async(() => {
      contador++; //Executado cada vez que uma spec(teste) é executada
    }));
    
    it('Primeiro teste', () => {
      //Verificar se o contador é igual a 1
    })
    
    it('Segundo teste', () => {
      //Verificar se o contador é igual a 2
    })
    
})
```
Já o **BeforeAll** como também o nome já diz, ele é chamado **somente uma vez** antes das execução dos testes.

###### Exemplo
```typescript
describe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeAll(async(() => {
      contador++; //Executado somente 1 vez
    }));
    
    it('Primeiro teste', () => {
      //Verificar se o contador é igual a 1
    })
    
    it('Segundo teste', () => {
      //Verificar se o contador é igual a 1
    })
    
})
```

#### AfterEach e AfterAll


É a mesma lógica do **Before** porém agora esses dois métodos serão executado somente depois dos testes, o **AfterEach** é executado toda hora que algum teste é terminado.

###### Exemplo
```typescript
describe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeEach(async(() => {
      contador++; //Adicionando mais um no contador antes de executar cada teste
    }));
    
    afterEach(async(() => {
      contador--; //Subtraindo um no contador depois de executar cada teste
    }));
    
    it('Primeiro teste', () => {
      //Verificar se o contador é igual a 1
    })
    
    it('Segundo teste', () => {
      //Verificar se o contador é igual a 1
    })
    
})
```

Já o **AfterAll** é chamado somente uma vez quando todos os testes forem finalizados.

###### Exemplo
```typescript
describe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeEach(async(() => {
      contador++; //Adicionando mais um no contador antes de executar cada teste
    }));
    
    afterAll(async(() => {
      contador--; //Subtraindo um no contador depois de executar todos os teste
    }));
    
    it('Primeiro teste', () => {
      //Verificar se o contador é igual a 1
    })
    
    it('Segundo teste', () => {
      //Verificar se o contador é igual a 2
    })
    
})
```
OBS: **Os exemplos dados só servem para o entendimento, nesses últimos quatro exemplos mostrados, pode ocorre de que o segundo teste pode ser executado primeiro, fazendo com que os testes fiquem inválidos**
