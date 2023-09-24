const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
        'https://media.tenor.com/Qun9u6W6N-YAAAAC/pokimane-stab.gif',
  		'https://media.tenor.com/Ky24tRXzGIAAAAAM/excel-saga-stabby-stab-stab.gif',
  		'https://media.tenor.com/JVpezNcCgVwAAAAM/imma-stab-you-eric-cartman.gif',
  		'https://media.tenor.com/gk--YeV-lJkAAAAM/stabby-stab-koishi.gif',
  		'https://media.tenor.com/Hud_IkY0D6kAAAAM/taletrap-tale.gif',
  		'https://media.tenor.com/JWTXar9FyrQAAAAC/trilxogies-the.gif',
  		'https://media.tenor.com/_WfoxV3ecmIAAAAC/knife.gif'
    ];
    

        if (message.mentions.members.size === 0) {
            return message.reply("Please mention a poor soul to stab.");
        } else if (message.mentions.members.first().id === message.author.id) {
            const stabEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Stabbed!')
                .setDescription(`${message.author.username} just stabbed themselves!`)
                .setImage(img[Math.floor(Math.random() * 6)]);
            message.channel.send({ embeds: [stabEmbed] });
        } else {
            const stabEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Stabbed')
                .setDescription(`${message.author.username} just stabbed ${message.mentions.members.first()}!`)
                .setImage(img[Math.floor(Math.random() * 6)]);
            message.channel.send({ embeds: [stabEmbed] });
        } 
}
exports.name = "stab";