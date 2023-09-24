const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
		'https://media.tenor.com/w4T323o46uYAAAAC/anime-bite.gif',
		'https://media.tenor.com/6HhJw-4zmQUAAAAC/anime-bite.gif',
		'https://media.tenor.com/ECCpi63jZlUAAAAC/anime-bite.gif',
		'https://i.gifer.com/H3Jt.gif',
		'https://media.tenor.com/DBwz1nSElowAAAAC/aruu-anime.gif',
		'https://64.media.tumblr.com/b1b7287355aedb3f0321188cb255d5d2/tumblr_p8a7oxomw61th206io3_640.gif',
		'https://media.tenor.com/3iWdmGbvMFQAAAAC/anime-finger.gif',
		'https://i.pinimg.com/originals/c0/b4/a9/c0b4a94993a08d1df826e27e55dd2fb0.gif',
		'https://i.gifer.com/np4.gif',
		'https://media.tenor.com/_AkeqheWU-4AAAAC/anime-bite.gif',
		'https://1.bp.blogspot.com/-WVysG3ES34o/WHQYX2VHIvI/AAAAAAAAtHE/Bt773uJfdnkRXUZL1DaVAbSkegdU2T-rgCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BDemi-chan%2Bwa%2BKataritai%2B-%2BEpisode%2B1%2B-%2BHikari%2BVampire%2BBites%2BYuki%2BSnow%2BWoman.gif',
		'https://media.tenor.com/aKzAQ_cFsFEAAAAC/arms-bite.gif',
		'https://media.tenor.com/8UjO54apiUIAAAAC/gjbu-bite.gif',
		'https://64.media.tumblr.com/8792d59342656f1f2217c73770cd1682/tumblr_p8a7oxomw61th206io4_640.gif',
		'https://media.tenor.com/udsFVWyKbOgAAAAd/bite-anime.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to bite.");
    } else if (message.mentions.members.first().id === message.author.id) {
    	const biteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Bite!')
            .setDescription(`${message.author.username} just bit themselves!`)
            .setImage(img[Math.floor(Math.random() * 14)]);
        message.channel.send({ embeds: [biteEmbed] });
    } else {
    	const biteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Bite!')
            .setDescription(`${message.author.username} just bit ${message.mentions.members.first()}!`)
            .setImage(img[Math.floor(Math.random() * 14)]);
        message.channel.send({ embeds: [biteEmbed] });
    }
}
exports.name = "bite";