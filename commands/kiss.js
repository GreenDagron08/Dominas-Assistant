const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => { 
	// throw images into an array
    const img = [
   		'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif?cid=790b7611a429e8844b1670bdd691a3e800a36db595056abd&rid=giphy.gif&ct=g',
   		'https://media.tenor.com/_8oadF3hZwIAAAAC/kiss.gif',
   		'https://gifdb.com/images/thumbnail/shocking-anime-kiss-stance-wn7wgnegs4xzc49w.gif',
   		'https://www.gifcen.com/wp-content/uploads/2022/03/anime-kiss-gif-5.gif',
   		'https://i.pinimg.com/originals/d7/f4/cc/d7f4cc76a4759f2930c83f7d4bda7215.gif',
   		'https://media.tenor.com/dn_KuOESmUYAAAAC/engage-kiss-anime-kiss.gif',
   		'https://thumbs.gfycat.com/AdeptHelpfulKitty-size_restricted.gif',
   		'https://64.media.tumblr.com/ea431c278ccd1ae3d1041709a4943b64/tumblr_mpqhwgauaS1swflh7o1_500.gif',
   		'https://media4.giphy.com/media/FqBTvSNjNzeZG/giphy.gif?cid=790b7611d14786107444b6ed79e8b851209ebca04c766c96&rid=giphy.gif&ct=g',
   		'https://cdn69.picsart.com/191947441000202.gif?to=min&r=640',
   		'https://64.media.tumblr.com/0c18cbfe89f27eb725fd4110f6457e37/tumblr_nuigmu4oCV1twyezqo1_500.gif',
   		'https://cdn.myanimelist.net/s/common/uploaded_files/1483588837-8380565ad290759921ae355a0bc242f5.gif',
   		'https://i.pinimg.com/originals/94/de/7b/94de7bd30a6779f05f3eeef441f12b53.gif',
   		'https://steamuserimages-a.akamaihd.net/ugc/775102481299729428/7468303EA0E2477C7CBD56914883C0C37AA97E40/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
   		'https://64.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_540.gif',
   		'https://animesher.com/orig/1/150/1503/15039/animesher.com_kiss-gif-what-anime-is-this-1503999.gif',
   		'https://www.gifcen.com/wp-content/uploads/2022/03/anime-kiss-gif.gif',
   		'https://i1.wp.com/loveisaname.com/wp-content/uploads/2016/09/23.gif',
   		'https://v5a5f8p9.stackpathcdn.com/wp-content/uploads/2019/05/best-anime-kisses-steinsgate.gif',
   		'https://i.pinimg.com/originals/50/3b/b0/503bb007a3c84b569153dcfaaf9df46a.gif',
   		'https://media.tenor.com/I1npxSu_yz0AAAAC/anime-kiss.gif'
    ];
    
    if (message.mentions.members.size === 0) {
        return message.reply("Please mention a user to kiss.");
    } else if (message.mentions.members.first().id === message.author.id) {
		message.reply(`${message.author.username} wants to kiss someone!`);
    } else {
    	const kissEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Kisses!')
            .setDescription(`${message.author.username} just kissed ${message.mentions.members.first()}! Awww!`)
            .setImage(img[Math.floor(Math.random() * 20)]);
        message.channel.send({ embeds: [kissEmbed] });
    }
}
exports.name = "kiss";