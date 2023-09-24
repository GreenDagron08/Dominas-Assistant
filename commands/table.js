const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 

    const img = [
        'https://media.tenor.com/zmxRSYHBnBAAAAAC/table-flip-mad.gif',
        'https://media.tenor.com/HHeCu_YAnGIAAAAC/table-flip-jontron.gif',
        'https://media.tenor.com/uyeeH3Z6MYoAAAAC/terence-kims.gif',
        'https://media.tenor.com/dvmCryEMTPMAAAAC/flip-table-table-flip.gif',
        'https://media.tenor.com/Gg6DzBNQ2VEAAAAd/table-flip.gif',
        'https://media.tenor.com/3bcTeA6It7QAAAAM/jeremy-fragrance-jump.gif'
    ];
    
	// inside a command, event listener, etc.
	const tableEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Table Flip!')
		.setDescription(`${message.author.username} flipped a table! Someone clean that up...`)
		.setImage(img[Math.floor(Math.random() * 5)]);

	message.channel.send({ embeds: [tableEmbed] });
}
exports.name = "table";