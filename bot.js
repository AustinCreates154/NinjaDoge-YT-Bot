const Discord = require('discord.js');
const client = new Discord.Client();
const config = require(`./config.json`)

client.on('ready', () => {
  console.log(`${client.user.tag}, is ready for action!`)
  client.user.setActivity('Hello, there!')
})

client.on("message", message => {
  if(author.user.id === "369256915479560192"){
    if(message.content === "botdeveloper!shutdown"){
      client.destroy(143)
    }
  }
})

client.on("message", message => {
  if(author.user.id === "369256915479560192") {
    if(message.content === "botdeveloper!ping")
      message.channgel.send(`Pong, Ping is ${Math.floor(bot.ping)} ms`)
  }
})

client.login(process.env.TOKEN)
