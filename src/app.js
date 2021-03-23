'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('1795435739:AAFFi4f9vvQ7URMYZpJgJmftB26wewT6bDQ')

class EventsController extends TelegramBaseController {
    primeiroEvento(scope) {
        let msg = `Resposta do primeiro comando do bot do telegram`
        scope.sendMessage(msg)
    }

    segundoEvento(scope) {
        let msg = `Resposta do segundo comando do bot do telegram`
        scope.sendMessage(msg)
    }

    terceiroEvento(scope) {
        let msg = `Resposta do terceiro comando do bot do telegram`
        scope.sendMessage(msg)
    }

    opcaoEvento(scope) {
        let msg = `
        ### COMANDOS ###
        "primeiro" - Retorna o primeiro Comando
        "segundo" - Retorna o segundo Comando
        "terceiro" - Retorna o terceiro Comando
        "opcoes" - Retorna o menu de comandos
        `
        scope.sendMessage(msg)
    }

    get routes() {
        return {
            "primeiroRouter": "primeiroEvento",
            "segundoRouter": "segundoEvento",
            "terceiroRouter": "terceiroEvento",
            "opcaoRouter": "opcaoEvento"
        }
    }
}

class OtherwiseController extends TelegramBaseController {
    handle(scope) {
        let msg = `Desculpe, não consegui entender esse comando`
        scope.sendMessage(msg)
    }
}



chatbot.router
    .when(new TextCommand('primeiro', 'primeiroRouter'), new EventsController())
    .when(new TextCommand('segundo', 'segundoRouter'), new EventsController())
    .when(new TextCommand('terceiro', 'terceiroRouter'), new EventsController())
    .when(new TextCommand('opcoes', 'opcaoRouter'), new EventsController())
    .otherwise(new OtherwiseController())



