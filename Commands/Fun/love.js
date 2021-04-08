const Discord = module.require('discord.js');

var Responses = [

     "iya nih",
     "tidak",
     "mungkin",
     "nggak tau, coba lagi",
     "Tentu saja tidak, coba lagi mungkin",
     "Maksud saya, saya kira begitu",
     "jika kamu berkata begitu",
     "Aku tidak mengatakan apa-apa tetapi kamu tahu jawabannya",
     "pasti tidak",
     "kemungkinannya💔",
     "kesempatan besar",
     "Kesempatan kecil",
     "kamu lebih baik berharap begitu",
     "kamu lebih baik tidak berharap begitu",
     "najis gw sama lu :v",
     "Iuuh gabakal asuu",
     "iyaak aku mau sama kamu :)",
     "Tak dan takan pernah"
];

module.exports = {
    name: "love",
    aliases: [],
    category: "Fun",
    description: "allow a your love",
    usage: "[love SomeLikeItHot]",
    run: async (client, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Please enter a person / object")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
}