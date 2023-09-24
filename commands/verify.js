const { EmbedBuilder } = require('discord.js');

exports.run = async(client, message, args) => { 
    const memberID = message.mentions.members.first().id;
    const roleIDAdd = '1142123402904207360';
    const roleIDRem = '1142123336474841178';
    
    const guild = message.guild;
    const roleAdd = guild.roles.cache.get(roleIDAdd);
    const roleRem = guild.roles.cache.get(roleIDRem);
    const memberName = await guild.members.fetch(memberID);
    
	if (message.member.roles.cache.some(r=>["admin"].includes(r.name))) {
        if (message.mentions.members.size === 0) {
            return message.reply("Please mention a user to verify.");
        } else {
            memberName.roles.add(roleAdd);
            memberName.roles.remove(roleRem);
            
            client.channels.cache.get('1142102066811121776').send(`Wecome ${message.mentions.members.first()}! Please write an intro about yourself using the template provided in ⁠<#1142133632086048890> and make sure to grab your ⁠<#1142115693077209178>. Have fun! <@&1145855690821349457>`);
        } 
    } else {
        message.reply("You're not allowed to do that!");
    }
}
exports.name = "verify";