const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
let embed = new Discord.RichEmbed()
const math = require("math-random"); 
const fs = require("fs");

client.once('ready', () => {
  console.log('The bot is ready and fired up for use!!')
})

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'with Amie!',
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
    let file = JSON.parse(fs.readFileSync("./kiss.json", "utf8"));
    let random = Math.round(math() * Object.keys(file).length);
    let image = file[random];

    let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} kisses ${message.mentions.users.first().username}`)
        .setImage(image)
        .setFooter(`Requested by: ${message.author.tag}`)
        console.log(random)
    message.channel.send(embed);
    }

    if(message.content.startsWith(`${prefix}loveme`)){
        message.delete();
        message.channel.send(`I love you ` + `<@`+message.author.id+`>` + ` <3`)
    }

    //fun
    
    if(message.content.startsWith(`${prefix}slap`)){
      let file = JSON.parse(fs.readFileSync("./slap.json", "utf8"));
      let random = Math.round(math() * Object.keys(file).length);
      let image = file[random];
  
      let embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username} slaps ${message.mentions.users.first().username}`)
          .setImage(image)
          .setFooter(`Requested by: ${message.author.tag}`)
          console.log(random)
      message.channel.send(embed);
    }

    if(message.content.startsWith(`${prefix}hug`)){
      let file = JSON.parse(fs.readFileSync("./hug.json", "utf8"));
      let random = Math.round(math() * Object.keys(file).length);
      let image = file[random];
  
      let embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username} hugs ${message.mentions.users.first().username}`)
          .setImage(image)
          .setFooter(`Requested by: ${message.author.tag}`)
          console.log(random)
      message.channel.send(embed);
    }

    if(message.content.startsWith(`${prefix}pat`)){
      let file = JSON.parse(fs.readFileSync("./pat.json", "utf8"));
      let random = Math.round(math() * Object.keys(file).length);
      let image = file[random];
  
      let embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username} is patting ${message.mentions.users.first().username}`)
          .setImage(image)
          .setFooter(`Requested by: ${message.author.tag}`)
          console.log(random)
      message.channel.send(embed);
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

    if(message.content.startsWith(`${prefix}urban`)){
      message.channel.send(`Here is your Urban Dictionary search result! https://www.urbandictionary.com/define.php?term=` + message.content.replace(`${prefix}urban`, '').trim());
    }

    if(message.content.startsWith(`${prefix}avatar`)){
      message.channel.send(message.author.avatarURL);
    }

    if(message.content.startsWith(`${prefix}cheer`)){
      let file = JSON.parse(fs.readFileSync("./cheer.json", "utf8"));
      let random = Math.round(math() * Object.keys(file).length);
      let image = file[random];
  
      let embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username} is cheering for ${message.mentions.users.first().username}`)
          .setImage(image)
          .setFooter(`Requested by: ${message.author.tag}`)
          console.log(random)
      message.channel.send(embed);
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

    //other

    if (message.content.startsWith(`${prefix}other`)){
      client.users.get(`${message.author.id}`).send({embed: {
          color: 15105570,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "These are the commands you can use!",
          description: "The bot works in DMs. Use `k.help` in DM for help.",
          fields: [{
              name: "`k.say [text]",
              value: "This lets the bot say something you requested"
            },
            {
              name: "`k.hidesay`",
              value: "This lets the bot say something you requested, but anonymously. "
            },
            {
              name: "`k.sub`",
              value: "The bot will give you link to provided sub reddit.."
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