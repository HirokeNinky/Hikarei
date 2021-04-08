const Djs = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    category: "Economy",
    description: "Seeyour Inventory",
    usage: "[inventory]",
    run: async (client, message, args) => {
//   let member = message.mentions.users.first() || bot.users.get(args[0]);

  let pickaxes = db.get(`pickaxe.${message.author.id}`)
   let sword = db.get(`sword.${message.author.id}`)
  
  let pickaxe; // wait
  if (pickaxes == 'iron') {
     pickaxe = '<:571949647665299456:574427306068803604>' //:v
  } else if (pickaxes == 'diamond') {
     pickaxe = `<:571949922837069824:574427318718562344>` 
  } else if (pickaxes == 'emerald') {
   //  pickaxe = `<:571950033713496075:574427331523903499//>`
  } else {
     pickaxe = '<:571949371222917121:574427276310085642>';
  }
  
  let swords; // wait
  if(sword  == 'iron') {
     sword = '<:571950328422072320:574427363975102480>' //:v
  } else if (sword == 'diamond') {
     sword = `<:571950593988362259:574427604107526144>` 
  } else if (sword == 'emerald') {
     sword = `<:571950725702221835:574427604271235082>`
  } else {
    sword = '<:571950186994204691:574427348061913098>';
  }
  // wait
  let balance = db.get(`userBalance.${message.author.id}`)
  let OreStone = db.get(`Ore.${message.author.id}.stone`)
  let OreCoal = db.get(`Ore.${message.author.id}.coal`)
  let OreRedstone = db.get(`Ore.${message.author.id}.redstone`)
  let OreLapis = db.get(`Ore.${message.author.id}.lapis`)
  let OreIron = db.get(`Ore.${message.author.id}.iron`)
  let OreGold = db.get(`Ore.${message.author.id}.gold`)
  let OreDiamond = db.get(`Ore.${message.author.id}.diamond`)
  let OreEmerald = db.get(`Ore.${message.author.id}.emerald`)
  
   let Zombie = db.get(`Mobs.${message.author.id}.zombie`)
   let Skeleton = db.get(`Mobs.${message.author.id}.skeleton`)
   let Creeper = db.get(`Mobs.${message.author.id}.creeper`)
   let Enderman = db.get(`Mobs.${message.author.id}.enderman`)
   let Spider = db.get(`Mobs.${message.author.id}.spider`)
  
  if (balance === null) balance = '0';
  if (OreStone === null) OreStone = '0';
  if (OreCoal === null) OreCoal = '0';
  if (OreRedstone === null) OreRedstone = '0';
  if (OreLapis === null) OreLapis = '0';
  if (OreIron === null) OreIron = '0';
  if (OreGold === null) OreGold = '0';
  if (OreDiamond === null) OreDiamond = '0';
  if (OreEmerald === null) OreEmerald = '0';
  
  if (balance === undefined) balance = '0';
  if (OreStone === undefined) OreStone = '0';
  if (OreCoal === undefined) OreCoal = '0';
  if (OreRedstone === undefined) OreRedstone = '0';
  if (OreLapis === undefined) OreLapis = '0';
  if (OreIron === undefined) OreIron = '0';
  if (OreGold === undefined) OreGold = '0';
  if (OreDiamond === undefined) OreDiamond = '0';
  if (OreEmerald === undefined) OreEmerald = '0';
  
  if (Zombie === null) Zombie = '0';
  if (Skeleton === null) Skeleton = '0';
  if (Creeper === null) Creeper = '0';
  if (Enderman === null) Enderman = '0';
  if (Spider === null) Spider = '0';
  
  if (Zombie === undefined) Zombie = '0';
  if (Skeleton === undefined) Skeleton = '0';
  if (Creeper === undefined) Creeper = '0';
  if (Enderman === undefined) Enderman = '0';
  if (Spider === undefined) Spider = '0';
  
 // if(!member) member = message.author;

  let embed = new Djs.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${message.author.tag}'s Resources`, message.author.displayAvatarURL)
  .setDescription(`:white_small_square: **Sword** » ${sword} \n:white_small_square: **Balance »** ${balance.toLocaleString()}`)
//  .addField('**Resources**', `<:emoji_25:571316657151016970> Emerald » ${OreEmerald} \n<:emoji_23:571316467610681404> Diamond » ${OreDiamond} \n<:emoji_22:571316430549811203>Gold » ${OreGold} \n<:emoji_23:571316548741103646> Iron » ${OreIron} \n<:emoji_26:571316728907169802> Lapis Lazuli » ${OreLapis} \n<:emoji_21:571316373779906590> Coal » ${OreCoal} \n<:emoji_19:571316287704399891> Stone » ${OreStone}`, true)
  .addField('**Mobs**', `<:571952267624972288:574427604346732584> Zombie » ${Zombie} \n<:571952400844455936:574427604443070476> Skeleton » ${Skeleton} \n<:571952517492113429:574427604711505940> Creeper » ${Creeper} \n<:571953099246141451:574428221861527583> Enderman » ${Enderman} \n<:571953394747703296:574428901988761600> Spider » ${Spider}`, true)
  message.channel.send(embed)
}
}