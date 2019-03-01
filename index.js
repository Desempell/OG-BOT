const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'd!'

client.login("BOT_TOKEN");
console.log(`Всё ок`);

client.on("ready", () => {
    client.channels.get("529981802497179648").send(`Бот включился. На сервере ${client.users.size} участника. Всего серверов со мной ${client.guilds.size}. Количество каналов равно ${client.channels.size}-ти.`)
client.user.setActivity(`Codding`);
});

client.on("message", (message) => { 
    if(message.content === prefix + "тест") {
    const embed = new Discord.RichEmbed()

    .setTitle('Ня')
    .setAuthor(`name`)
    .setColor(0xFFFFFF)
    .setDescription(`Кекc`)
    .setImage(`https://cdn.discordapp.com/avatars/322699868865036290/a_2b6e99c84706c7afb3963e4827a3dbc7.gif`)
    
        message.channel.send(embed)
      } 
     
});

client.on("message", (message) => {
    if(message.content === prefix + "аватар") {
        message.reply(message.author.avatarURL);
    }
});
let a = ["Да", "Нет", "Возможно","Я лучше промолчу","Маловероятно", "Спроси у хохла"];
client.on("message", (message) => {
    const embed = new Discord.RichEmbed();
    embed.setTimestamp();
    embed.setTitle(`Ответ`);
    embed.setColor(0xffd9d9);
    embed.setDescription(a[(Math.floor(Math.random () * a.length ))]);
    embed.setAuthor(`name`);
    if(message.content.startsWith(prefix + "ruletka ")) {
        message.reply(embed)
    }
    else if(message.content === prefix + "ruletka") {
    const embedd = new Discord.RichEmbed();
    embedd.setDescription(`Напишите вопрос`);
    embedd.setColor(0xFFFFFF);    
    embedd.setTimestamp();
        message.reply(embedd)
    }
    
});
client.on(`message`, (message) => {
    if(message.channel.id ===`414350089226551319`){
    
    message.react(`425616013149601792`);
    message.react(`425616053641543680`);
       
    }
});
 
