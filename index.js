const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'd!'

 client.login(process.env.BOT_TOKEN).catch(err => {console.log(err)});

console.log(`Всё ок`);

client.on("ready", () => {
    client.channels.get("549601149645488151").send(`Бот включился. На сервере ${client.users.size} участника. Всего серверов со мной ${client.guilds.size}. Количество каналов равно ${client.channels.size}-ти.`)
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
    embed.setColor(0xc2fcf3);
    embed.setDescription(a[(Math.floor(Math.random () * a.length ))]);
    if(message.content.startsWith(prefix + "ruletka ")) {
        message.reply(embed)
    }
    else if(message.content === prefix + "ruletka") {
    const embedd = new Discord.RichEmbed();
    embedd.setTitle(`Напишите вопрос`);
    embedd.setColor(0xc2fcf3);    
    embedd.setTimestamp();
        message.channel.send(embedd)
    }
    
});
client.on(`message`, (message) => {
    if(message.channel.id ===`414350089226551319`){
    
    message.react(`425616013149601792`);
    message.react(`425616053641543680`);
       
    }
});
 
client.on(`message`, (message) => {
    if(message.content.match(new RegExp('^'+ prefix +'role (.{1,20}) #([a-f0-9]{6,6})$', 'i' ))) {
    
    let role =  message.content.match(new RegExp(prefix +'role (.{1,20}) #([a-f0-9]{6,6})', 'i'))

    message.guild.createRole({
        position: 2 ,
        name: role[1],
        color: role[2] })

       .then(role => message.member.addRole(role.id)) 


        const e = new Discord.RichEmbed();

        e.setTitle(`Роль создана.`);
        e.setColor(0xc2fcf3);
    message.channel.send(e);                        

}});
client.on(`message`, (message) => { 
    let args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if(commandName === 'deleterole') {
        let rolename = args.join(" ");
        rolename = message.guild.roles.find('name', rolename);
        if(!rolename) return;
        
     let membersWithTheRole = message.guild.members.filter(x => x.roles.has(rolename.id)).size; 
     
     if(membersWithTheRole === 1 && message.member.roles.has(rolename.id)) {
        role.delete()  

    
    }
        const v = new Discord.RichEmbed();

        v.setTitle(`Роль удалена.`);
        v.setColor(0xc2fcf3);
    message.channel.send(v);        
      
}});
