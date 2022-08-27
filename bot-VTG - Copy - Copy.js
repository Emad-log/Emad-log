const { clear } = require("console");
const Discord = require("discord.js");
const { futimesSync } = require("fs");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const block_trades_channel = client.channels.get("720058358832300167");
const ai_alerts_channel = client.channels.get("720058358832300167");
const commands_channel = client.channels.get("636399538650742795");

const cmdchannels = ["998418716964429874", "785217702629212202", "720058358832300167"]

client.on("message", async message => {
    try
    {
        if (cmdchannels.includes(message.channel.id))
        {
            if (!message.content.toUpperCase().startsWith("TR")) return;
            if (message.author.id == "832009298216878111")
            {
                return;
            }
            console.log("Command");
            let filter = m => m.author.id === "741929371136163870";
            client.channels.get('738994420736720957').send(message.content);
            client.channels.get('738994420736720957').awaitMessages(filter, {
                max: 1,
                time: 10000,
                errors: ['time']
              })
              .then(msg => {
                try
                {
                    client.channels.get(message.channel.id).send(msg.first().attachments.array()[0].url);
                }
                catch
                {
                    client.channels.get(message.channel.id).send(msg.first().content);
                }
              })
              .catch(collected => {
                client.channels.get(message.channel.id).send('Error, bot timeout!');
              });
        }
    }
    catch (e)
    {
        console.error(e);
    }
})

client.login("OTc1ODY5ODg4NDY1ODY2ODQy.G00_2M.DKgp9LGPBnqLHofsqjZNCmSaRdjdhjY86CjLyw");