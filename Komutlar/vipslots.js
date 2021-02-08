const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let enginar = "https://habbofont.net/font/habbovip/"+isim+".gif"
  const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(enginar)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["taş"],
  permLevel: 0
};
exports.help = {
  name: 'vipslot-yazı',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};