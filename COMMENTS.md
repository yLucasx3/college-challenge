## A. Decisão da arquitetura utilizada

A arquitetura escolhida foi a Clean Architecture (Arquitetura Limpa) por diversos motivos, alguns são:

- Sistemas educacionais que oferecem cursos online ou presencial, frequentemente evoluem e se adaptam às mudanças nas demandas dos usuários ou do mercado. A Clean Architecture proporciona uma base sólida que facilita a incorporação dessas mudanças sem reescrever toda a aplicação.

- Incentiva a separação clara de responsabilidades, o que torna o código mais fácil de entender, modificar e manter. Isso é crucial em sistemas administrativos, que frequentemente exigem ajustes e expansões.

- Permite que você faça alterações em uma camada sem afetar as outras. Isso é útil quando novos recursos precisam ser adicionados ou quando é necessário adaptar o sistema a novos requisitos.

- Promove a testabilidade, tornando mais simples escrever testes unitários e garantir que as diferentes partes do sistema funcionem conforme o esperado. Isso é especialmente importante em ambientes educacionais, onde a precisão das informações é crucial.

- Propõe que os detalhes de frameworks e bibliotecas externas fiquem nas camadas mais externas. Isso significa que você pode trocar ou atualizar frameworks sem afetar a lógica central da aplicação.

- Destaca a importância do domínio central da aplicação. Em um sistema de administração de escola de cursos online, isso significa que a lógica relacionada ao ensino, cursos, alunos, e professores permanece clara e coesa.

## B. Lista de blibliotecas de terceiros utilizadas

- lerna -> usado para a manipulação de packages (nesse caso, cada package é um projeto, a API e o CLIENT), transformando num monorepo, fazendo com que não precisemos criar
  dois repositórios para a entrega do teste, sem falar em escalabilidade, compartilhamento de tipos, etc.

- express -> framework de nodejs
- cors -> para liberar acesso à nossa api para domínios distintos
- nodemon -> para um desenvolvimento mais performático, por conta do hot-reload
- tsconfig-paths -> para conseguirmos realizar @imports
- bcrypt -> usado para hash/compare de senhas
- prisma -> ORM de prefência
- jsonwebtoken - usado para criar tokens de authenticação
- axios - usado para fazer requisições para a API a partir do CLIENT
- postgresql - usado para persistencia de dados
- docker - usado para subir uma imagem do postgresql

## C. O que você melhoraria se tivesse mais tempo

- Configuração do lerna, principalmente para compartilhar os tipos entre o client e a api.
- O Docker, atualmente está somente subindo uma imagem do postgresql, gostaria de colocar uma imagem do node, e uma UI para manipular e visualizar dados do postgresql
- Colocaria Dev Container no projeto, facilitando a instalação de todos os requisitos do projeto.
- Gostaria muito de fazer a documentação da arquitetura e solução e escrever os testes, mas infelizmente não deu tempo.
- Se eu tivesse mais tempo, migraria o front-end para Nuxt, já que seria bem tranquilo de trabalhar pelo leque de ferramentas que ele traz.
- Aprimoraria a segurança da aplicação, implementei uma autenticação bem simple com jwt.

## D. Quais requisitos obrigatórios que não foram entregues

Creio que todos os requisitos obrigatórios foram entregues.

Agradeço pela oportunidade de participar do processo seletivo, e espero boas notícias 😊
