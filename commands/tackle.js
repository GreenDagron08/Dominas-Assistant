const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
   		'https://media.tenor.com/7CeI4Tsmz7QAAAAC/anime-tackle.gif',
   		'https://media.tenor.com/EGHawmNW-L4AAAAC/anime-hug.gif',
   		'https://media.tenor.com/sBFE3GeNpJ4AAAAC/tackle-hug-couple.gif',
   		'https://media.tenor.com/RS_KKA78ifQAAAAC/tackle-hug.gif',
   		'https://media.tenor.com/B-uwk3oNj9UAAAAC/anime-hug.gif',
   		'https://media.tenor.com/CKk8d1me03QAAAAC/tackle-hug.gif',
   		'https://thumbs.gfycat.com/OrganicAdvancedAdder-size_restricted.gif',
   		'https://static.wikia.nocookie.net/vsbattles/images/4/44/Spin_gif.gif/revision/latest?cb=20191216225433',
   		'https://thumbs.gfycat.com/NarrowUnsightlyHamadryas-size_restricted.gif',
   		'https://i.pinimg.com/originals/38/ff/71/38ff71787d331e2c8c7326846e718c4b.gif',
   		'https://64.media.tumblr.com/cf1bdab1b51f84ea0124127430b249d0/tumblr_n00po85F3i1rveihgo1_500.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to tackle.");
    } else if (message.mentions.members.first().id === message.author.id) {
        	return message.reply("You can't tackle yourself!");
    } else {
    	const tackleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Tackled!')
            .setDescription(`${message.author.username} just tackled ${message.mentions.members.first()}! Oof!`)
            .setImage(img[Math.floor(Math.random() * 10)]);
        message.channel.send({ embeds: [tackleEmbed] });
    }
}
exports.name = "tackle";