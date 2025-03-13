Henrique Maciel - Rm559628 ; Igor Nociti - Rm560225 ; Pedro Paulo Sabino - RM559578 
NPM para instalar: igor-nociti


🎉 O que é este módulo?

O igor-nociti é um módulo Node.js que transforma o seu console.log em algo muito mais estiloso e divertido! Quer deixar suas mensagens no terminal mais animadas e personalizadas? Então esse pacote é para você! 😉

🚀 Como instalar?

A instalação é super simples! Basta rodar o comando:

npm install igor-nociti


✨ Como usar?

Exemplo básico

Importe o módulo e veja a mágica acontecer:

import coolsolelog from "@igornociti/igor-nociti";

coolsolelog("Oi gente! Como vocês estão?");

Quando você rodar esse código, sua mensagem aparecerá estilizada no terminal, com cores chamativas e até alguns detalhes 🔥

Personalizando a saída

Quer deixar ainda mais divertido? Use emojis e caracteres especiais:

coolsolelog("🚀 Isso é incrível!");
coolsolelog("🔥 Vamos codar com estilo! 🎨");

📦 Dependências

Para fazer essa mágica acontecer, usamos:

chalk → Dá um toque de cor no terminal.

cool-ascii-faces → Adiciona emojis e caracteres estilosos.

Se precisar instalar manualmente:

npm install chalk cool-ascii-faces

🌍 Como publicar uma nova versão no npm?

Caso queira atualizar o pacote, siga estes passos:

Altere a versão no package.json (por exemplo, de 1.0.0 para 1.0.1):

"version": "1.0.1"

Faça login no npm (caso ainda não tenha feito):

npm login

Publique sua atualização:

npm publish --access public

🔥 Testando o módulo depois de publicado

Após a publicação, você pode testar seu pacote criando um novo projeto e instalando:

npm install igor-nociti

Depois, crie um arquivo index.js e execute:

import coolsolelog from "@igornociti/igor-nociti";

coolsolelog("Testando meu módulo publicado!");

Rodando:

node index.js

Se tudo deu certo, sua mensagem estará aparecendo com muito mais estilo! 🚀


