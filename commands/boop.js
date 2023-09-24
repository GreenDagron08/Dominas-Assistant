const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
  		'https://media.tenor.com/wEpd9Ouwrq8AAAAd/boop.gif',
  		'https://media2.giphy.com/media/x4bWE4pS66NEPZR9G1/giphy.gif?cid=790b7611278068abf8d042c0c46da6c0e0ba1ffd4b992fe7&rid=giphy.gif&ct=g',
  		'https://media.tenor.com/9B-8-6ywHKoAAAAC/archer-boop.gif',
  		'https://media.tenor.com/RtthZ9OIiSsAAAAC/boop-archer.gif',
  		'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwlrdYXb_SpbOW2tOd-MLNKMsQnGNfP5E9cGk5FwZWJHQsmeSMiPJNmC_aHHXzqNklICzk7uH8LLUHDWTrIBdBDEvLUVFM_ePkl8X71lKcwteFCJYTEd9mbiMd_inWowg_f1FlaBZAtwqyO9U47u9sCzFmRgw1HJ5nQtGCszrGnWQ8jWs9MB-rcj_/s16000/Santa%20Cat%20GIF%20•%20Funny%20Jingle%20boops%20on%20Santa%20Cat%20nose%20but%20no%20fucks%20given%20haha%20%5Bok-cats.com%5D.gif',
  		'https://i.pinimg.com/originals/3c/c8/4a/3cc84a52ecb88a52ae28f987c80e3016.gif',
  		'https://cdn.discordapp.com/attachments/1064114931965902848/1066165484078235718/6F516C73-2607-4347-BD0D-395210AB3223.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to boop.");
    } else if (message.mentions.members.first().id === message.author.id) {
    	const boopEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Booped!')
            .setDescription(`${message.author.username} just booped themselves on the nose!`)
            .setImage(img[Math.floor(Math.random() * 6)]);
        message.channel.send({ embeds: [boopEmbed] });
    } else {
    	const boopEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Booped!')
            .setDescription(`${message.author.username} just booped ${message.mentions.members.first()}! Boop!`)
            .setImage(img[Math.floor(Math.random() * 6)]);
        message.channel.send({ embeds: [boopEmbed] });
    }
}
exports.name = "boop";