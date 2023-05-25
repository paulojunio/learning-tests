# Angular - Testes unitários - Jest
Este repositório tem como objetivo contemplar o funcionamento de testes unitários no Angular framework, 
utilizando o Jest como ferramentas para testes.

### Jest 

O [Jest](https://jestjs.io/pt-BR/) é um framework criado com o objetivo de fazer testes em Javascript/Typescript, ele é independente de qualquer outro framework para funcionar.

# Conceitos - Jest

### Suítes 

Suítes tem como objetivo agrupar os testes de uma determinado componente ( ou qualquer estrutura a ser testada ). Nele possui dois parâmetros, o primeiro é uma string que tem como objetivo fazer uma breve explicação do que será testado, o segundo é uma função que agrupa todas as configurações de teste e os testes que serão executados.
OBS: O ideal é que tenha somente um describe para cada arquivo de teste!

###### Exemplo
```typescript
describe('Explicação breve do componente que será testado', () => {
  //Teste e configurações dos testes ficaram aqui dentro!
})
```

### Specs 

Specs ou testes, são literalmente os testes que serão feitos em cima do seu código, também possuem dois parâmetros, o primeiro(string) é uma breve explicação do teste que será realizado e o segundo parâmetro é uma função onde ficará o teste descrito.

###### Exemplo
```typescript
describe('Explicação breve do componente que será testado', () => {
  it('Explicação do que será testado', () => {
    //Teste ficará aqui!
  })
})
```
### Habilitando Suites ou Specs específicos

Caso queira executar algum suíte ou algum teste em específico, é só colocar a palavra **only** na frente de cada comando que queria executar.

###### Exemplo
```typescript
describe.only('Suite sera executado!', () => {
  it.only('Esse teste sera executado!', () => {
  
  })

  it('Esse teste não sera executado!', () => {
  
  })
})

describe('Nenhum teste desse suíte será executado!', () => {
  it('Esse teste não sera executado!', () => {
  
  })
})
```

### Desabilitando Suites ou Specs específicos

Caso queira desabilitar algum suíte ou algum teste em específico, é só colocar a letra **x** na frente de cada comando que queria desabilitar.

###### Exemplo
```typescript
xdescribe('Nenhum teste desse suíte será executado!', () => {
  xit('Esse teste não sera executado!', () => {
  
  })
})

describe('Suite sera executado!', () => {
  xit('Esse teste não sera executado!', () => {
  
  })

  it('Esse teste sera executado!', () => {
  
  })
})
```

### Configuração e desmontagem

#### BeforeEach e BeforeAll

Esses dois hooks executaram algum código antes dos testes serem executados, porém cada uma com sua peculiaridade. O **BeforeEach** como o nome já diz, **antes de cada teste ser executado** ele é chamado.

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


É a mesma lógica do **Before** porém agora esses dois hooks serão executados somente depois dos testes, o **AfterEach** é executado toda hora que algum teste é terminado.

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
OBS: **Os exemplos dados só servem para o entendimento do funcionamento dos hooks!!! Nesses últimos quatro exemplos mostrados, pode ocorre de que o segundo teste pode ser executado primeiro, fazendo com que os testes fiquem inválidos**

### Verificações (Expect)

O ideal de cada teste é que seja feito a verificação de seus resultados, para isso é usada a diretiva **expect**, que recebe como parâmetro somente um argumento que é o resultado que será analisado. Junto com **expect** é necessário utilizar os [matchers](https://jestjs.io/docs/using-matchers) ( comparadores ) que retorna um valor booleano que representa a comparação entre o resultado do **expect** com o valor “esperado”.

###### Exemplo
```typescript
describe('Explicação do componente', () => {
  
    let contador = 0;
    
    beforeEach(async(() => {
      contador++; //Adicionando mais um no contador antes de executar cada teste
    }));
   
    it('Primeiro teste', () => {
      expect(contador).toBe(1) //Verificar se o contador é igual a 1
    })
    
    it('Segundo teste', () => {
      expect(contador).toBe(2) //Verificar se o contador é igual a 2
    })
    
})
```

### TestBed - Não será aprofundado

O TestBed é um dos principais utilitários para componentes, diretivas, serviços de teste de unidade no Angular. Ele é específico do Angular, com este recurso pode se criar um módulo de teste construído dinamicamente que emula um **@NgModule**. Também o recurso fornece métodos para criar componentes e serviços para casos de teste de unidade.

###### Exemplo

```typescript
describe('Explicação do componente', () => {
  
    let component: Component; 
    let fixture: ComponentFixture<Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
              imports: [],
              providers: [],
        }).compileComponents();
    }));
    
    beforeEach(async(() => {
        fixture = TestBed.createComponent(Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    
})
```

Existem várias discussões atualmente de se temos que utilizar ou não o TestBed nos nossos testes unitários no angular, abaixo estão alguns benefícios e malefícios de se usá-lo:

#### Benefícios

Podemos testar o DOM do nosso componente, testando eventos de cliques, mudança de cores, mudança de foco e dentre outras coisas.
#### Malefícios
Problemas com o DOM da aplicação podem ocorrer, como componentes ou libs que estão sendo usados pelo componente PAI.
Sistema de Mockagem de serviços muito complicado.
Demora para realizar testes simples, pois para cada teste novo, devemos fazer um novo TestBed para aquele componente que estamos testando.
Nesse caso, vamos abandonar nosso amiguinho TestBed aqui! Mas para mais discussões sobre o assunto tem esse [artigo](https://dev.to/angular/unit-testing-in-angular-to-testbed-or-not-to-testbed-3g3b) muito legal com exemplos e suas diferenças!

Mas aí você deve se perguntar, “como então vamos testar nossos componentes sem o TestBed???” A resposta é simples, vamos testar nosso componente! Basicamente criando uma instância dele, enviando para ele ( o seu construtor ) todos os dados necessários para ele ser criado! Mas e os mocks? Como vamos fazê-los? Então vamos lá!

### Mock

Objetos mock, objetos simulados ou simplesmente mock (do inglês mock object) em desenvolvimento de software são objetos que simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos. Em outras palavras, os objetos mock são objetos “falsos” que simulam o comportamento de uma classe ou objeto “real” para que possamos focar o teste na unidade a ser testada. [Wikipedia](https://pt.wikipedia.org/wiki/Objeto_mock).

No Jest podemos criar mocks de serviços e funções usando um simples [comando](https://jestjs.io/pt-BR/docs/mock-functions) **jest.fn()**, depois de criado podemos retornar algo ou implementar algo dentro dessa função mockada.


```typescript
 const mockFunctionSimples = jest.fn();
 mockFunctionSimples.mockReturnValue(‘Abacaxi’); //Neste caso iremos voltar sempre o valor Abacaxi quando chamamos esta função!
 const mockFunctionSimplesDois = jest.fn(() => ‘Maca’); //Neste caso podemos já criar o mock com esse retorno, sem precisar da função mockReturnValue
```

Existem várias funções ligadas ao mock do jest, para ver outros exemplos basta entrar nesse [link](https://jestjs.io/pt-BR/docs/mock-functions) para entender um pouco mais sobre os mocks!