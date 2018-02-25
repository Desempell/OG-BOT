const Discord = require("discord.js");
const robot = new Discord.Client();

robot.login("");
var prefix = 's!'

console.log('Start..');

robot.on('ready',()=>{  
  robot.user.setActivity('Working...');
});

robot.on('message', (message) => {

    if(message.author.bot) return;

    if (message.content == (prefix)+'help'){
        message.channel.send({embed: {
          author: {
            name: robot.user.username,
            icon_url: robot.user.avatarURL
          },
            color: 3447003,

            fields: [{
                name: "Мои комады:",
                value: '**__'+prefix+'avatar\n'+prefix+"Seven\n"+prefix+'Yoba\n'+prefix+'Dark\n'+prefix+'EgorKa\n'+prefix+'Тёма\n'+prefix+'Enoteg\n'+prefix+'Сёма__** (*Don\'t use this*)\n...\n__In developing!__\n...'
              },
              {
                name: "Мой сервер:",
                value: "**Заходи, здесь весело -** [Орден Геймеров](https://discord.gg/FTgCAj6)**!**"
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "© SevenTrio"
            }
          }
    
        });
        return;
    }  
    if(message.content == (prefix +'Seven')){
      message.reply('это похоже на моего автора!');
      return;
    }
    if(message.content == (prefix +'Yoba')){
      message.reply(':YOBA:');
      return;
    }
    if(message.content == (prefix +'Dark')){
      message.reply('о великий глава сервера!');
      return;
    }
    if(message.content == (prefix +'EgorKa')){
      message.reply('вы ошиблись, это Арина.');
      return;
    }
    if(message.content == (prefix +'Тёма')){
      message.reply('nya :Nyasha:');
      return;
    }
    if(message.content == (prefix +'Enoteg')){
      message.reply('больше не :nyasha:, :confounded:');
      return;
    }
    if(message.content == (prefix +'pidr')){
      message.reply('вот он - <@248521740945195008>!');
      return;
    }
    if(message.content == (prefix +'Сёма')){
      message.reply('**я не Сёма!** :rage:');
      return;
    }
    if(message.content == (prefix +'avatar')){
      message.reply(message.author.avatarURL);
      return;
    }
    
});