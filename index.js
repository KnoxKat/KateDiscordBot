const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('The bot is ready and fired up for use!!')
})

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'Lesbian Love Simulator 2300',
          type: "PLAYING",
          url: "https://www.twitter.com/MutedOreo"
      }
  });
});

client.on('message', async message => {

    if(message.content.startsWith(`${prefix}say`)){
        message.channel.send(`<@`+message.author.id+`>` + " said: " + '"' + message.content.replace(`${prefix}say`,'').trim() + '"');
        }
  
      if(message.content.startsWith(`${prefix}hidesay`)){
      message.delete();
      message.channel.send(`Anonymous` + " said: " + '"' + message.content.replace(`${prefix}hidesay`,'').trim() + '"');
        }

    if(message.content.startsWith(`${prefix}adminsay`)){
        message.delete();
        message.channel.send(message.content.replace(`${prefix}adminsay`,'').trim());
              }
    
    if(message.content.startsWith(`${prefix}kate`)){
        message.channel.send(`My name is Kate, I was made to display lesbian love.`)
    }

    if(message.content.startsWith(`${prefix}amie`)){
        message.channel.send(`I love my girlfriend, she's called Amie.`)
    }

    if(message.content.startsWith(`${prefix}loveme`)){
        message.delete();
        message.channel.send(`I love you ` + `<@`+message.author.id+`>` + ` <3`)
    }

    if(message.content.startsWith(`${prefix}kiss`)){
        message.channel.mathRandom.send(`https://pa1.narvii.com/6380/bef5f29916ba06f161e12e62c6c7fe49a2d619c5_hq.gif`)
        message.channel.send(`https://data.whicdn.com/images/300070619/original.gif`)
    }

    if(message.content.startsWith(`${prefix}name`)){
        message.channel.send(`Your name is ` + `<@`+message.author.id+`>`)
    }
     
    if(message.content.startsWith(`${prefix}sub`)){
        message.channel.send('Have fun on this subreddit!  https://www.reddit.com/r/' + message.content.replace(`${[prefix]}sub`, '').trim());
        }

    //help dm command
      if (message.content.startsWith(`${prefix}help`)){
        message.channel.send(`You've recieved a DM in which the commands are shown.`)
        client.users.get(`${message.author.id}`).send('**These are the commands that currently work:** k.kate _ _ k.amie _ _ k.say _ _ k.hidesay _ _ k.help _ _ k.kiss _ _ k.help');
    }

})

client.login(token);