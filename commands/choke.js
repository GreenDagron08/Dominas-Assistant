const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
		'https://media.tenor.com/2nQRYBDT3QQAAAAC/anime-choke-choke.gif',
   		'https://media.tenor.com/ixaDEFhZJSsAAAAC/anime-choke.gif',
   		'https://media.tenor.com/CzFhk3N8pcEAAAAC/angry-anime-choke.gif',
   		'https://media.tenor.com/Xg24OqpyZ9MAAAAd/bungou-stray-dogs-choke.gif',
   		'https://i.pinimg.com/originals/75/44/06/7544068d90849bc2f50844b9dc443a72.gif',
   		'https://media.tenor.com/PiFqVBIspFYAAAAC/anime-choke.gif',
   		'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7df5494c-114c-4721-9fa5-a82859751d1b/dfgg19l-503852df-e5f5-40d3-8fea-			26b6cc2c06cb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZjU0OTRjLTExNGMtNDcyMS05ZmE1LWE4Mjg1OTc1MWQxYlwvZGZnZzE5bC01MDM4NTJkZi1lNWY1LTQwZDMtOGZlYS0yNmI2Y2MyYzA2Y2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ns4x62r6YEEEiR7s7pFwJDJPCEDCF1Swn8RPKYONMKE'
    ];
    

    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to choke.");
    } else if (message.mentions.members.first().id === message.author.id) {
		const chokeEmbed = new EmbedBuilder()
        	.setColor(0x0099FF)
            .setTitle('Choked!')
            .setDescription(`${message.author.username} just choked themselves!`)
            .setImage(img[Math.floor(Math.random() * 6)]);
        message.channel.send({ embeds: [chokeEmbed] });
    } else {
        const chokeEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Choked!')
            .setDescription(`${message.author.username} just choked ${message.mentions.members.first()}!`)
            .setImage(img[Math.floor(Math.random() * 6)]);
        message.channel.send({ embeds: [chokeEmbed] });
    }
}
exports.name = "choke";