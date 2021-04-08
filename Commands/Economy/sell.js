const Djs = require("discord.js") //KUIK DEBE BIKIN BINGUNG
const db = require("quick.db")

module.exports = {
    name: "sell",
    aliases: ["sell"],
    category: "Economy",
    description: "Sell your item",
    usage: "[sell]",
    run: async (client, message, args) => {
  let amt = Math.floor(Math.random() * 100) + 250;
  let balance = db.get(`userBalance.${message.author.id}`)
  let OreStone = db.get(`Ore.${message.author.id}.stone`)
  let OreCoal = db.get(`Ore.${message.author.id}.coal`)
  let OreRedstone = db.get(`Ore.${message.author.id}.redstone`)
  let OreLapis = db.get(`Ore.${message.author.id}.lapis`)
  let OreIron = db.get(`Ore.${message.author.id}.iron`)
  let OreGold = db.get(`Ore.${message.author.id}.gold`)
  let OreDiamond = db.get(`Ore.${message.author.id}.diamond`)
  let OreEmerald = db.get(`Ore.${message.author.id}.emerald`)
  
  
   let Zombie = db.get(`Mobs.${message.author.id}.zombie`)//w8 gw di panggil 
   let Skeleton = db.get(`Mobs.${message.author.id}.skeleton`)//BANTU YAK
   let Creeper = db.get(`Mobs.${message.author.id}.creeper`)
   let Enderman = db.get(`Mobs.${message.author.id}.enderman`)
   let Spider = db.get(`Mobs.${message.author.id}.spider`)
   let amount = args[1]
   //let amount = args[all]
  
  if (!args[0]) {
  let embed = new Djs.MessageEmbed()
.setTitle("Sell Ore & Mobs")
.setDescription("To sell something please `$,sell [item] [amount]`")
.setColor("RANDOM")
  .addField("Example", "z!sell zombie 10")
//.addField("Pickaxe shop", `1.<:Iron_Pickaxe:542271493417992223> Iron Pickaxe | Price: $80000\n2.<:Diamond_Pickaxe:542271517006757889> Diamond Pickaxe | Price: $200000\n3.<:Emeral_Pickaxe:542271541178793995> Emerald Pickaxe | Price: $400000`)
//.setImage("https://cdn.discordapp.com/attachments/556380204843532298/566543426510782464/price-icon-18.png")
.setTimestamp()
message.channel.send(embed)
  
  
} else if (args[0] == "stone") {
          message.channel.send(`Your sold your Stone!\n<:571954118642368522:574428969001156609> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 1)
          db.subtract(`Ore.${message.author.id}.stone`, amount)
            return; 
} else if (args[0] == "coal") {
  
         message.channel.send(`Your sold your Coal!\n<:571954190906294272:574429012500283392> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Ore.${message.author.id}.coal`, amount)
  
} else if (args[0] == "iron") {
  
         message.channel.send(`Your sold your Iron!\n<:571954239748833280:574429012877770752> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Ore.${message.author.id}.iron`, amount)
} else if (args[0] == "gold") {
  
         message.channel.send(`Your sold your gold!\n<:571954297399672854:574429017420070921> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Ore.${message.author.id}.gold`, amount)
  
} else if (args[0] == "diamond") {
  
  message.channel.send(`Your sold your diamond!\n<:571954346074570752:574429017369739274> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 7)
          db.subtract(`Ore.${message.author.id}.diamond`, amount)
  
} else if (args[0] == "emerald") {
  
  message.channel.send(`Your sold your emerald!\n<:571954458125271050:574429017592037376> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 10)
          db.subtract(`Ore.${message.author.id}.emerald`, amount)
  
} else if (args[0] == "lapis") {
  
  message.channel.send(`Your sold your lapislazuli!\n<:571954638119763968:574429017172869130> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Ore.${message.author.id}.lapis`, amount)
 } else if (args[0] == "zombie") {
  
  message.channel.send(`Your sold your Zombie Head!\n<:571952267624972288:574427604346732584> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Mobs.${message.author.id}.zombie`, amount)
 }else if (args[0] == "skeleton") {
  
  message.channel.send(`Your sold your Skeleton Head!\n<:571952400844455936:574427604443070476> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Mobs.${message.author.id}.skeleton`, amount)
 }else if (args[0] == "creeper") {
  
  message.channel.send(`Your sold your Creeper Head!\n<:571952517492113429:574427604711505940> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Mobs.${message.author.id}.creeper`, amount)
 }else if (args[0] == "enderman") {
  
  message.channel.send(`Your sold your Enderman Head!\n<:571953099246141451:574428221861527583> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Mobs.${message.author.id}.enderman`, amount)
 }else if (args[0] == "spider") {
  
  message.channel.send(`Your sold your Spider!\n<:571953394747703296:574428901988761600> ${amount}`)
          db.add(`userBalance.${message.author.id}`, amount * 4)
          db.subtract(`Mobs.${message.author.id}.spider`, amount)
 /*} else if (args[0] == "all") { 
    message.channel.send("Sell all")
         db.add(`userBalance.${message.author.id}.amount`, amt)
         db.subtract(`Ore.${message.author.id}.stone`, amt)  
         db.subtract(`Ore.${message.author.id}.coal`, amt)
         db.subtract(`Ore.${message.author.id}.iron`, amt)
         db.subtract(`Mobs.${message.author.id}.spider`, amt)
         db.subtract(`Ore.${message.author.id}.gold`, amt)
         db.subtract(`Ore.${message.author.id}.diamond`, amt)
         db.subtract(`Ore.${message.author.id}.emerald`, amt)
         db.subtract(`Ore.${message.author.id}.lapis`, amt)
         db.subtract(`Mobs.${message.author.id}.zombie`, amt)
         db.subtract(`Mobs.${message.author.id}.enderman`, amt)
         db.subtract(`Mobs.${message.author.id}.creeper`, amt)
         db.subtract(`Mobs.${message.author.id}.skeleton`, amt)//DAH GYAN GW :V
   //OH W BARU PAHAM EA
 } // dah tinggal subract semua aja*/
} // NEWBIE KUIK DEBE
}
}