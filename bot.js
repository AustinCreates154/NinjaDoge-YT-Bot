const Discord = require('discord.js');
const client = new Discord.Client();
const config = require(`./config.json`)

client.on('ready', () => {
  console.log(`${client.user.tag}, is ready for action!`)
  client.user.setActivity('Hello, there!')
})

client.on("message", message => {
  if(message.author.id === "369256915479560192"){
    if(message.content === "botdeveloper!shutdown"){
      client.destroy(143)
    }
  }
})
client.on("message", message => {
  if(message.author.id !== "369256915479560192"){
    if(message.content === "botdeveloper!shutdown"){
      message.channnel.send('Bot Developer only sorry.')
    }
  }
})

client.on("message", message => {
  if(message.author.id === "369256915479560192") {
    if(message.content === "botdeveloper!ping") {
      message.channel.send(`Pong, Ping is ${Math.floor(client.ping)} ms`)
    }
  }
})
client.on("message", message => {
  if(message.author.id !== "369256915479560192"){
    if(message.content === "botdeveloper!ping"){
      message.channnel.send('Bot Developer only sorry.')
    }
  }
})

client.on("message", message => {
  if(message.content === ".hello") {
    message.channel.send(`Hello ${message.author.tag}`)
  }
})

client.login(process.env.TOKEN)
