const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '!wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/wuxnnyuVEH`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("812258699543969803").send(
`> <: By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`😍ڕێکلامەکەت بنێرە| By : RAEES ☑️`) 
});




client.login("ODEyMzk0NDY5MTEzNTkzODg2.YDAHTg.00y0yesf8nfsrW82TrREfhEIjrM");//تۆکین لێرە دانێ
