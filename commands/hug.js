const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
       'https://media.tenor.com/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif',
       'https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif',
       'https://i.pinimg.com/originals/1c/68/6c/1c686c678819f8643e61e7efb0850fc1.gif',
       'https://media.tenor.com/oSPZDjEf9vQAAAAM/anime-hug-anime-hugging.gif',
       'https://gifdb.com/images/high/cute-anime-girl-hug-o8euoib6wh9xmxfz.gif',
       'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif',
       'https://i.pinimg.com/originals/4d/aa/87/4daa87a634e1faeee0bb78fbe0f8abca.gif',
       'https://gifdb.com/images/high/anime-hug-kin-iro-mosaic-pqmb9zeds4ikw3l0.gif',
       'https://i.gifer.com/origin/17/17c398be0c8f21d90f2c1946f9afd90f.gif',
       'https://media.tenor.com/pOXWNxMvQSAAAAAC/anime-hug.gif',
       'https://i.pinimg.com/originals/a4/13/4f/a4134f06e210a7540ca20ae165dc457f.gif',
       'https://media.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif',
       'https://aniyuki.com/wp-content/uploads/2022/06/anime-hugs-aniyuki-57.gif',
       'https://media.tenor.com/MbSf5DKcHwQAAAAC/anime-hug.gif',
       'https://gifdb.com/images/high/anime-hug-black-bullet-mlalwtek0tspacib.gif',
       'https://i.pinimg.com/originals/b7/ad/8d/b7ad8dc636e844613da9a506805e4eea.gif',
       'https://media.tenor.com/H6KawsRE1RkAAAAC/hug-anime.gif',
       'https://usagif.com/wp-content/uploads/gif/anime-hug-59.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to hug.");
    } else if (message.mentions.members.first().id === message.author.id) {
		message.reply(`${message.author.username} hugged themslves!`);
    } else {
    	const hugEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Hugs!')
            .setDescription(`${message.author.username} just hugged ${message.mentions.members.first()}! Awww!`)
            .setImage(img[Math.floor(Math.random() * 17)]);
        message.channel.send({ embeds: [hugEmbed] });
    }
}
exports.name = "hug";