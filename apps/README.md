# Expo CLI

## Iniciando instalação do Expo

### Requisitos:

* Node.js
* Git
* Watchman ( para macOS / Linux )

### Recomendações

* VS Code
    * Extensão: Expo Extension ( debugging e autocomplete )
* Yarn

### Comandos

* Ver lista de comandos disponíveis no Expo CLI

``` node
    npx expo -h
```

* Verifica a conta loggada. Se não estiver loggado em nenhuma conta aparecerá a mensagem: "*Not logged in*"

``` node
    npx expo whoami
```

* logar / registrar uma conta

``` node
    npx expo login
```
1. irá pedir por e-mail / nome de usuário
2. senha

``` node
    npx expo register
```
1. irá abrir a página da Expo para se registrar

---

# Criando um novo App

* Para iniciar o novo projeto:

1. **nota**: "my-app" pode ser substituido pelo nome que quiser dar

``` node
    npx create-expo-app my-app
```

* entrar na pasta:

``` node
    cd my-app
```