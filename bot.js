var Botkit = require('botkit');
var Guid = require('guid');

var controller = Botkit.slackbot({
    debug: false
    //include "log: false" to disable logging
    //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
var config = require('./slack.config');
controller.spawn(config).startRTM();

// give the bot something to listen for.
controller.hears(['hoff'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    var reply_with_attachments = {
        attachments: [
            {
                'image_url': 'http://place-hoff.com/400/400?n=' + Guid.raw(),
                title: 'Hoff'
            }
        ],
        icon_url: 'http://place-hoff.com/400/400?n=' + Guid.raw(),
        username: 'rp-bot'
    };

    bot.reply(message, reply_with_attachments);
});