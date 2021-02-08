const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Bir yazı girmen gerek`)
  const enginar = `https://habbofont.net/font/habbo_clicker/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("yazı")
  .setColor("RANDOM")
  .setImage(enginar)
  .setFooter('Başarıyla Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'mor-yazı',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'altın <yazı>'
}