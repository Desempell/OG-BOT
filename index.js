const Discord = require(`discord.js`);
const client = new Discord.Client();

client.login("NDE1MTM4MzE3MzgyOTc1NTAw.DWxjQQ.nxBUS90dWTE6qIfF7yTyUvTsL9g");

if(message.author.bot) return;
if(message.content.indexOf(process.env.PREFIX) !== 0) return;
const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


client.on("message",(message)=>{
if(message.content=="og!Dark")
    message.reply("О,вы тоже знаете моего создателя?")});

    client.on("message",(message)=>{
        if(message.content=="og!Egorka"){
            message.reply("Это тот чсвшный модератор? :thinking:")};
      });     

    client.on('message', message => {
        if (message.content == "og!Avatar") {
            message.reply(message.author.avatarURL);
        }
    });

    client.on("message",message => {
        if (message.content == "og!info") {
            message.reply(message.channel.send({embed: {
                color: 6667003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "Орден Геймеров",
                description: "Это сервер для истинных геймеров!",
                fields: [{
                    name: "Информация",
                    value: "Вы можете прочитать правила в канале #rules и посмотреть систему ролей в #welcome"
                  },
         ]
            }}))
        }});
    
    client.on("message",message => {
        if (message.content == "og!help") {
       message.reply(message.channel.send({embed: {
        color: 5367703,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Это список команд",
        description: "Этот список не конечный,новые команды скоро будут.",
        fields: [{
            name: "og!Dark",
            value: "- Вопрос от бота"
          },
          {
            name: "og!Egorka",
            value: "- Чудо вопрос"
          },
          {
            name: "og!info",
            value: "- Информация о нашем сервере"
          },
         {
            name: "og!Avatar",
            value: "- Бот скинет вашу аватарку"
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Dark"
        }
      }
    })
)}});      
