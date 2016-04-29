var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true
    //include "log: false" to disable logging
    //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
var config = require('./slack.config');
controller.spawn(config).startRTM();

// give the bot something to listen for.
controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, 'Hello! I heard: ' + message.text);
});