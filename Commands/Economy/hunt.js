const db = require("quick.db")
const Djs = require("discord.js")

module.exports = {
    name: "hunt",
    aliases: ["hu"],
    category: "Economy",
    description: "hunt everday",
    usage: "[hunt]",
    run: async (client, message, args) => {
 var swords = await db.get(`sword.${message.author.id}`)
var user = message.author

//Ore Count
var ZombieCount = Math.floor(Math.random() * 20)
var SkeletonCount = Math.floor(Math.random() * 15)
var CreeperCount = Math.floor(Math.random() * 1)
var EndermanCount = Math.floor(Math.random() * 19)
var SpiderCount = Math.floor(Math.random() * 2)

//Colour untuk embed
let role = message.member.highestRole

  if (!swords || swords === null) return message.channel.send(`Type: h!start to using this commands`)
  if (!swords || swords === undefined) return message.channel.send(`Type: h!start to using this commands`)



 //Mine System
  let sword;
   if(swords == 'iron') {
    let embed = new Djs.MessageEmbed()
   .setAuthor(user.username, user.avatarURL)
   .setColor("RANDOM")                                      
   .addField("You Hunted", `<:571952267624972288:574427604346732584> x\`${ZombieCount}\`\n<:571952400844455936:574427604443070476> x\`${SkeletonCount}\`\n<:571952517492113429:574427604711505940> x\`${CreeperCount}\` \nWith your <:571950328422072320:574427363975102480>`)
  .setTimestamp()
    message.channel.send('Hunting...').then(async msg => {
  setTimeout(() => {
    msg.edit(embed);
  }, 1000)
    })
   db.add(`Mobs.${message.author.id}.zombie`, ZombieCount)
   db.add(`Mobs.${message.author.id}.skeleton`, SkeletonCount)
   db.add(`Mobs.${message.author.id}.creeper`, CreeperCount)
     
  } else if (swords == 'diamond') {
    let embeda = new Djs.MessageEmbed()
   .setAuthor(user.username, user.avatarURL)
   .setColor("RANDOM")                                      
   .addField("You hunted", `<:571952267624972288:574427604346732584> x\`${ZombieCount}\`\n<:571952400844455936:574427604443070476> x\`${SkeletonCount}\`\n<:571952517492113429:574427604711505940> x\`${CreeperCount}\`\n<:571953099246141451:574428221861527583> x\`${EndermanCount}\` \n\nWith your <:571950593988362259:574427604107526144>`) 
    .setTimestamp()
    message.channel.send('Hunting...').then(async msg => {
  setTimeout(() => {
    msg.edit(embeda);
  }, 1000)
    })
   db.add(`Mobs.${message.author.id}.zombie`, ZombieCount)
   db.add(`Mobs.${message.author.id}.skeleton`, SkeletonCount)
   db.add(`Mobs.${message.author.id}.creeper`, CreeperCount)
   db.add(`Mobs.${message.author.id}.enderman`, EndermanCount)
  } else if (swords == 'emerald') {
    let embedb = new Djs.MessageEmbed()
   .setAuthor(user.username, user.avatarURL)
   .setColor("RANDOM")                                      
   .addField("You hunted", `<:571952267624972288:574427604346732584>  x\`${ZombieCount}\`\n<:571952400844455936:574427604443070476> x\`${SkeletonCount}\`\n<:571952517492113429:574427604711505940> x\`${CreeperCount}\`\n<:571953099246141451:574428221861527583> x\`${EndermanCount}\`\n<:571953394747703296:574428901988761600> x\`${SpiderCount}\` \n\nWith your <:571950725702221835:574427604271235082>`)
    message.channel.send('Hunting...').then(async msg => {
  setTimeout(() => {
    msg.edit(embedb);
  }, 1000)
    })
    db.add(`Mobs.${message.author.id}.zombie`, ZombieCount)
   db.add(`Mobs.${message.author.id}.skeleton`, SkeletonCount)
   db.add(`Mobs.${message.author.id}.creeper`, CreeperCount)
   db.add(`Mobs.${message.author.id}.enderman`, EndermanCount)
   db.add(`Mobs.${message.author.id}.spider`, SpiderCount) 
  } else if(swords == 'wood') {
    let emebed = new Djs.MessageEmbed()
     .setAuthor(user.username, user.avatarURL)
   .setColor("RANDOM")                                      
   .addField("You hunted", `<:571952267624972288:574427604346732584> x\`${ZombieCount}\`\n<:571952400844455936:574427604443070476> x\`${SkeletonCount}\`\nWith your <:571950186994204691:574427348061913098>`)
  .setTimestamp()
    message.channel.send('Hunting...').then(async msg => {
  setTimeout(() => {
    msg.edit(emebed);
  }, 1000)
    })
   db.add(`Mobs.${message.author.id}.zombie`, ZombieCount)
   db.add(`Mobs.${message.author.id}.skeleton`, SkeletonCount)
  }
  } 
}