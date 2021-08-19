# HTML & CSS - Forms
## Conteúdos
### Parte II

Os `types` que podem ser usados de acordo com a aplicação do campo input:
* `button` : define um botão;
* `checkbox` : permite que o usuário selecione ZERO ou MAIS opções de um número limitado de escolhas;
* `color` : campos de entrada que devem conter uma cor para selecionar;
* `date` : campos de entrada que devem conter uma data;
* `datetime-local` : campo de entrada de data e hora, sem fuso horário;
* `email` : campos de entrada que devem conter um endereço de e-mail;
* `file` : campo de seleção de arquivo e um botão "Procurar" para uploads de arquivos;
* `month` : permite ao usuário selecionar um mês e ano;
* `number` : define um campo de entrada numérico;
* `password` : os caracteres do campo de senha são mascarados (mostrados como asteriscos ou círculos);
* `radio` : permite que um usuário selecione APENAS UMA de um número limitado de opções;
* `range` : define um controle para inserir um número (como um controle deslizante). Intervalo padrão é de 0 a 100;
* `reset` : redefinirá todos os valores do formulário para seus valores padrão;
* `search` : usado para campos de pesquisa;
* `submit` : envia dados de formulário a um manipulador de formulários(especificado na action do form );
* `tel` : campos de entrada que devem conter um número de telefone;
* `text` : campo de entrada de texto de linha única;
* `time` : permite que o usuário selecione um horário (sem fuso horário);
* `url` : campos de entrada que devem conter um endereço URL;
* `week` : permite ao usuário selecionar uma semana e um ano.

Os atributos são propriedades inseridas para seus inputs `HTML`. Com elas, você poderá adicionar funcionalidades ao seu formulário. Temos os seguintes atributos abaixo:

* `value` : especifica um valor inicial para um campo de entrada;
* `readonly` : especifica que um campo de entrada é somente leitura;
* `disabled` : especifica que um campo de entrada deve ser desativado;
* `size` : especifica a largura visível, em caracteres, de um campo de entrada;
* `maxlength` : especifica o número máximo de caracteres permitidos em um campo de entrada;
* `min` e `max` : especificam os valores mínimo e máximo para um campo de entrada;
* `multiple` : especifica que o usuário tem permissão para inserir mais de um valor em um campo de entrada;
* `pattern` : especifica uma expressão regular em relação à qual o valor do campo de entrada é verificado;
* `placeholder` : especifica uma dica curta que descreve o valor esperado de um campo de entrada;
* `required` : especifica que um campo de entrada deve ser preenchido antes de enviar o formulário;
* `step` : especifica os intervalos de números válidos para um campo de entrada;
* `autofocus` : especifica que um campo de entrada deve obter foco automaticamente quando a página é carregada;
* `height` e `width` : especificam a altura e a largura de um elemento;
* `autocomplete` : especifica se um campo de entrada deve ter o preenchimento automático ativado ou desativado.

**Para fixar**  

Vamos praticar um pouco, criando uma tela de login? 🔥
1. Adicione os campos de entrada para email e senha.
2. Adicione um checkbox com o texto Lembre-me .
3. Adicione um botão com o texto Entrar .
4. Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
5. Adicione o atributo `required` para os campos de email e senha.
6. Adicione o atributo `autocomplete="off"` para o campo de email.
7. Adicione o atributo `autofocus` para o campo de email.

## Exercício

### **Criando um formulário de currículo.**
* Crie um arquivo **HTML** chamado `form.html` para o formulário.
* Caso julgue necessário, crie estilos **CSS** para o seu formulário, de acordo com a sua imaginação. * Coloque-os em um arquivo `styles.css` .
* Crie também um arquivo `script.js` para seu código **JavaScript** .  

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:
*Faça as validações inicialmente pelo HTML*
1. Crie um `<fieldset>` para os seguintes dados pessoais:
    * Nome - Texto
      * Limite de 40 caracteres
      * Campo obrigatório
    * Email - Texto
      * Limite de 50 caracteres
      * Campo obrigatório
    * CPF - Texto
      * Limite de 11 caracteres
      * Campo obrigatório
    * Endereço - Texto
      * Limite de 200 caracteres
      * Campo obrigatório
    * Cidade - Texto
      * Limite de 28 caracteres
      * Campo obrigatório
    * Estado - Select
      * Todos os estados do Brasil
      * Utilize estruturas de repetição via * **JavaScript** para gerar os `<option>`
      * Campo obrigatório
    * Tipo - Radio Button
      * Casa, Apartamento
      * Campo obrigatório
2. Crie outro `<fieldset>` para dados do seu último emprego  
    * Resumo do currículo - TextArea
      * Limite de 1000 caracteres
      * Campo obrigatório
    * Cargo - Texto
      * Limite de 40 caracteres
      * Campo obrigatório
    * Descrição do cargo - Texto
      * Limite de 500 caracteres
      * Campo obrigatório
    * Data de início - Texto
      * Verificar o formato da data `dd/mm/aaaa` .
      * O dia deve ser > 0 e <= 31.
      * O mês deve ser > 0 e <= 12.
      * O ano não pode ser negativo.
      * Caso alguma das condições seja inválida no momento do envio do formulário, exibir via `alert` uma mensagem de erro contextualizada.
      * Campo obrigatório
3. Logo abaixo do formulário, crie um botão que:
    * Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o [preventDefault()](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault) . Note que isso vai impedir as validações do HTML ao fazer o submit
    * Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
    * Caso todos os dados sejam válidos, monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário.
    * Caso haja algum dado inválido, mostre em uma `<div>` uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
4. Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.