const Discord = require(`discord.js`);
const client = new Discord.Client();
const prefix = "og!";
 
client.login("NDE1MTM4MzE3MzgyOTc1NTAw.DXWwJg.Nfw6PdyujhhCnvfC6Vj_QDBVZOA").catch(err => {console.log(err);});
 
 
client.on("message", async (message) =>{
 
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "Dark")
        message.reply("О,вы тоже знаете моего создателя?");
 
    if(command === "Egorka"){
        message.reply("Это тот чсвшный модератор? :thinking:")};
 
    if (command === "avatar") {
        let member = message.mentions.members.first();
        if (!member)
            return message.channel.send('Бип-Буп-Бип');
        message.reply(member.user.avatarURL);
    }
 
    if (command === "info") {
        message.reply({embed: {
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
        }});
    }
   
    if (command === "help")
    message.reply({embed: {
        color: 5367703,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Это список команд",
        description: "Этот список не конечный,новые команды скоро будут.",
        fields: [{
            name: prefix+"Dark",
            value: "- Вопрос от бота"
          },
          {
            name: prefix+"Egorka",
            value: "- Чудо вопрос"
          },
          {
            name: prefix+"info",
            value: "- Информация о нашем сервере"
          },
         {
            name: prefix+"Avatar",
            value: "- Бот скинет аватарку того кого вы упомяните"
        },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Dark"
        }
   
  }})
});