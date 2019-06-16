const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
let embed = new Discord.RichEmbed() 

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

    //romance

    if(message.content.startsWith(`${prefix}declare`)){
        message.delete();
        message.channel.send(`Hey ` + message.content.replace(`${[prefix]}declare`, '').trim() + ` someone wants to confess their love to you, and that person is ` +  `<@`+message.author.id+`>` + `!`)
    }

    if(message.content.startsWith(`${prefix}kiss`)){
        message.channel.send(`https://pa1.narvii.com/6380/bef5f29916ba06f161e12e62c6c7fe49a2d619c5_hq.gif`)
        message.channel.send(`https://data.whicdn.com/images/300070619/original.gif`)
    }

    if(message.content.startsWith(`${prefix}loveme`)){
        message.delete();
        message.channel.send(`I love you ` + `<@`+message.author.id+`>` + ` <3`)
    }

    //fun
    
    if(message.content.startsWith(`${prefix}slap`)){
        message.channel.send(`You slapped **` + message.content.replace(`${[prefix]}slap`, '').trim() + `**`);
    }

    if(message.content.startsWith(`${prefix}hug`)){
        message.channel.send(`You're hugging with **` + message.content.replace(`${[prefix]}hug`, '').trim() + `**`);
    }

    if(message.content.startsWith(`${prefix}pet`)){
        message.channel.send(`You're petting **` + message.content.replace(`${[prefix]}pet`, '').trim() + `**`);
    }

    //other
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

    if(message.content.startsWith(`${prefix}name`)){
        message.channel.send(`Your name is ` + `<@`+message.author.id+`>`)
    }
     
    if(message.content.startsWith(`${prefix}sub`)){
        message.channel.send('Have fun on this subreddit!  https://www.reddit.com/r/' + message.content.replace(`${[prefix]}sub`, '').trim());
        }

    //help dm command
      if (message.content.startsWith(`${prefix}help`)){
        client.users.get(`${message.author.id}`).send({embed: {
            color: 15105570,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "These are the commands you can use!",
            description: "The bot works in DMs. Use `k.help` in DM for help.",
            fields: [{
                name: "Fun",
                value: "For more information use `k.fun`"
              },
              {
                name: "Romance",
                value: "For more information use `k.romance`"
              },
              {
                name: "Other",
                value: "For more information use `k.other`"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: "Requested by " +message.author.username
            }
          }
        });
    }
    //fun help
    if (message.content.startsWith(`${prefix}fun`)){
        client.users.get(`${message.author.id}`).send({embed: {
            color: 15105570,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "These are the commands you can use!",
            description: "The bot works in DMs. Use `k.help` in DM for help.",
            fields: [{
                name: "`k.slap [user @]`",
                value: "This slaps a certain user"
              },
              {
                name: "`k.hug [user @]`",
                value: "This makes you hug someone"
              },
              {
                name: "`k.pet [user @]`",
                value: "This makes you pet someone"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: "Requested by " +message.author.username
            }
          }
        });
    }
    //romance help
    if (message.content.startsWith(`${prefix}romance`)){
        client.users.get(`${message.author.id}`).send({embed: {
            color: 15105570,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "These are the commands you can use!",
            description: "The bot works in DMs. Use `k.help` in DM for help.",
            fields: [{
                name: "`k.kiss [user @]`",
                value: "This kisses a certain user. **Command currently not finished**"
              },
              {
                name: "`k.loveme`",
                value: "This makes the bot tell you that Kate loves you."
              },
              {
                name: "`k.declare`",
                value: "The bot will tell someone that you love them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: "Requested by " +message.author.username
            }
          }
        });
    }

})

client.login(token);
