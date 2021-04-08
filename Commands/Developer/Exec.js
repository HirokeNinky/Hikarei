const { exec } = require('child_process'); //kita gunakan module child_process untuk memanipulasi system process. jangan add di dependencies sudah terpasang!
module.exports = {
    name: "dmall",
    aliases: ["dms"],
    category: "Developer",
    description: "This Commands just for owner",
    usage: "[dmall]",
    run: async (client, message, args) => {
const { owners_id } = client.config;
    owners_id.forEach(async function(owner) {
    if(msg.author.id !== owner) return; //kita restrict penggunaan command exec karena ini berpengaruh sama seperti eval.
    exec(args.join(' '), (error, output) => { //2 parameter 1. String yg akan dieksekusi 2. callback
        if(!error.length){ //jika ada tidak ada error
            return msg.channel.send(output, { code: 'bash'}); //maka keluarkan output
          
         
        }
        //jika error tidak ada maka kode percabangan diatas tidak akan dieksekusi
        return msg.channel.send(error, { code: 'bash'}); //maka defaultnya adalah kirim errornya
    });
    });
}
}