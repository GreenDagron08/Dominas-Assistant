const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
    	'https://us.rule34.xxx//images/1055/53b59db9795cb935be5d25addf53522c.gif',
    	'https://us.rule34.xxx//images/2198/f934551b5c40682b36eb026c8080c8c2.gif?2386413',
    	'https://us.rule34.xxx//images/3603/15d8256b15bca3001b2206b0f627ba16.gif',
    	'https://www.eroticaingif.com/upload/2019/01/15/20190115095916-7d4e4ffb.gif',
    	'https://cdn.discordapp.com/attachments/1050586455040335953/1062059582811295744/14.gif',
    	'https://i0.wp.com/hungryforyou.org/wp-content/uploads/2022/06/bdsm-bondage-hentai-sex.gif?fit=600%2C300&ssl=1',
    	'https://cdn.discordapp.com/attachments/1050586455040335953/1062372982992949248/7zpcoi65j9ba1.gif', 
    	'https://i.redd.it/s05fad7qfo291.gif',
    	'https://img.xbooru.com//images/283/aaa184aded96c5cef76574890a0ac281.gif'
    ];
    
	if (!message.member.roles.cache.some(r=>["Male"].includes(r.name))) {
        if (message.mentions.members.size === 0) {
            return message.reply("Please mention a user to peg.");
        } else if (message.mentions.members.first().id === message.author.id) {
        	return message.reply("You can't peg yourself! You're not that flexible.");
        } else {
            const pegEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Pegged!')
                .setDescription(`${message.author.username} just pegged ${message.mentions.members.first()}!`)
                .setImage(img[Math.floor(Math.random() * 8)]);
            message.channel.send({ embeds: [pegEmbed] });
        } 
	} else {
        message.reply("You're not allowed to do that!");
    }
}
exports.name = "peg";