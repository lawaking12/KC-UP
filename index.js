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

///////
 
///////ARBELE//////


 //////

////////

client.on("message", msg => {
  if (msg.content === "Reklam?") {
    msg.reply(
      "بنێرە بۆ من دڵم 😘"
    );
  }
});

/////

////////

client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "بنێرە بۆ من دڵم 😘"
    );
  }
});

/////
////////

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "بنێرە بۆ من دڵم 😘"
    );
  }
});

/////
////////

client.on("message", msg => {
  if (msg.content === "ڕێکلام") {
    msg.reply(
      "بنێرە بۆ من دڵم 😘"
    );
  }
});

/////
/////
 client.on('ready' , () => {
var join = client.channels.get("821361491076841505")
if (join) join.join()
  

})

////////
client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/B2ntxrm3RQ`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("821361477696618496").send(
`> <: By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })

//////////////


client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`😍ڕێکلامەکەت بنێرە| By : RAEES ☑️`) 
});




client.login("ODIzNTA4MzI2NTQwNTA5MjE0.YFh15Q.6LeBBN6GFqbX29v3zC6GpO4t6MA");//تۆکین لێرە دانێ
