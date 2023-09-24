const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
   		'https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif',
   		'https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif',
   		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjRRKtvKNzrMqJskPh7cVwFFhW0ygjinxZQ&usqp=CAU',
   		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dGLxmm1LcWvjpftqJ0qO4WjFoAJvFZ7zuA&usqp=CAU',
   		'https://media.tenor.com/d0hNKcx-GbEAAAAd/anime-cuddle-snow-cuddle.gif',
   		'https://gifdb.com/images/thumbnail/aharen-san-anime-cuddle-3qzbqmuihsw4r6g4.gif',
   		'https://i.pinimg.com/originals/dd/d4/2c/ddd42c994d225d87c0c635ca7cb2c10b.gif',
   		'https://gifdb.com/images/high/cute-sleeping-anime-cuddle-0y4t23es1pzulfri.gif',
   		'https://media.tenor.com/wFxMAqCsQDoAAAAd/cats.gif',
   		'https://media.tenor.com/TsL3G4aPH2wAAAAC/milk-and-mocha-milk.gif',
   		'https://media.tenor.com/RccDmLjx_TYAAAAC/mochi-cuddle-peach.gif',
   		'https://media.tenor.com/GTlDCm4P4EsAAAAd/kitty-kitten.gif',
   		'https://media.tenor.com/Nubkzwf6AZoAAAAC/couple-cute.gif',
   		'https://media.tenor.com/bLttPccI_I4AAAAC/cuddle-anime.gif',
   		'https://media.tenor.com/3OMzo-QSVqEAAAAd/baby-hug.gif',
   		'https://media.tenor.com/FoFMuwi0kfoAAAAd/cat-cuddle.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to cuddle.");
    } else if (message.mentions.members.first().id === message.author.id) {
		message.reply(`${message.author.username} wants to be cuddled!`);
    } else {
    	const cuddleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Cuddles!')
            .setDescription(`${message.author.username} just cuddled up to ${message.mentions.members.first()}!`)
            .setImage(img[Math.floor(Math.random() * 15)]);
        message.channel.send({ embeds: [cuddleEmbed] });
    }
}
exports.name = "cuddle";