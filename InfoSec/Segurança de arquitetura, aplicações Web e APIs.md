# Segurança de arquitetura, aplicações Web e APIs
## Módulo 1 | Aula 5.1 a 5.4

__Considerações importantes:__

1. Objetivos únicos;
2. Voz ativa aos DEVS;
3. Equilibrar prioridades;
4. Treinamento de segurança para equipe de Devs;
5. Especializar devs em segurança;
6. Tenha consciência de que sempre há uma falha.

### Arquitetura de aplicações:

Existem diversas formas de comunicação e funcionamento de aplicações,
que são sumarizadas no quadro abaixo.

![tipoarq](https://user-images.githubusercontent.com/67568578/111080870-4bd8b980-84df-11eb-95f7-faa4390aa2ab.png)

Na arquitetura MVC, há uma delegação de responsabilidade em cadacamada de aplicação. Sendo elas:
  - View: responsável por coletar e exibir dados para usuários (veja sobre
vulnerabilidades desta camada quando falarmos de Javascript nas aulas
práticas).
  - Controller: responsável por receber as requisições e tratá-las.
  - Model: responsável por tratamento junto a camada de dados.
 
![MVC](https://user-images.githubusercontent.com/67568578/111081125-8000aa00-84e0-11eb-9e3a-44ce8280c90f.png)
 
![REST-API](https://user-images.githubusercontent.com/67568578/111081159-b3dbcf80-84e0-11eb-8569-ad8d128a7b52.png)

O ataque às APIs ocorre quando estas não processam adequadamente as
permissões, controles de sessão e outros mecanismos de proteção de segurança ao
fornecer as informações devidas.
- Enumeração de dados / Massive attack (DELETE, PUT).
- Falha no controle de sessão.
- Injeção de parâmetros.
- DoS (ausência de paginação).
- Excesso de confiança na camada de apresentação/view (Javascript).

Com relação ao excesso de confiança na camada de apresentação, é
importante destacar que o Javascript é processado na camada de View e que,
portanto, pode ser manipulado por um usuário mal-intencionado. Desta forma,
qualquer validação que envolva regra de negócio pode ser facilitada na camada view,
mas deve ser verificada no backend (API).
As proteções para as APIs serão detalhadas a seguir, junto as proteções
aplicadas às aplicações Web.

De acordo com o __OWASP (Open Web Application Security Project)__, estes são
os ataques mais comuns a aplicações Web:
- Injeção de parâmetros (SQL Injection, REST Parameters etc.).
- Falha no controle de acesso (erro de implementação de sessão, auth etc.).
- Exposição de informações sensíveis (disponibilização demasiadamente de
infos).
- Interfaces administrativas expostas.
- Falhas de controle de acesso (usuários autenticados acessam mais do que
deveriam).
- Configuração default (mensagens verbosas, bibliotecas usadas sem
configuração).
- Cross site scripts (Injeção de códigos JS em formulários Web).
- Deserialização insegura (confiar no que vem do cliente ou é processado por
este).
- Logs / monitoração insuficientes.
A melhor forma de termos aplicações seguras é tendo código seguro, no
entanto, nem sempre isso é possível. Realizar o refatoramento de código legado pode
levar anos e o custo seria muito grande. Desta forma, algumas soluções em camada
de rede são possíveis e outras são complementares, a seguir listamos estas:

![arquitetura-segura](https://user-images.githubusercontent.com/67568578/111081250-32d10800-84e1-11eb-98fe-5faeced15665.png)


