const Discord = require('discord.js');

const UltraEasyClient = {
    _prefix: '',
    constructor: function(options) {
        super(options);
        this.on("message",(message => {

        }));
    },
    setCommandPrefix: function(prefix) {
        this._prefix = prefix;
        return this;
    },
    getCommandPrefix: function() {
        return this._prefix;
    },
    enableHelpCommand: function(commandName) {
        // enable Help Command with commandName
    },
    disableHelpCommand: function() {
        // disable Help Command with commandName
    },    
};

Object.assign(Discord.Client.prototype, UltraEasyClient);

module.exports = Discord;