const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 

    const img = [
        'https://media.tenor.com/2K3eAaRfAHIAAAAd/tenor.gif',
        'https://media.tenor.com/nYcoGrUlZykAAAAC/anime.gif',
        'https://media.tenor.com/0Pg3M7l4evAAAAAC/ariana-grande-singer.gif',
        'https://media.tenor.com/nRamNIzNm7wAAAAC/kitty-dance.gif',
        'https://media.tenor.com/i3gpM_yU3fcAAAAC/unicorn-dance.gif',
        'https://media.tenor.com/J8KeZSDe_acAAAAC/dace.gif'
    ];
    
	// inside a command, event listener, etc.
	const danceEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Dance!')
		.setDescription(`${message.author.username} dances!`)
		.setImage(img[Math.floor(Math.random() * 5)]);

	message.channel.send({ embeds: [danceEmbed] });
}
exports.name = "dance";