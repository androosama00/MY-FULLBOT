const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "=";
/////////////////////////
////////////////////////








client.on("guildCreate", guild => {
    client.channels.get("485739026477744149").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("485739026477744149").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });













client.on('message' , message => { 
    if (message.author.bot) return;
     if (message.content === prefix + "se") {
       if (message.author.id !== '359034240714932224') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});











client.on('message' , message => {
	if (message.content.startsWith(prefix + 'owner')){
			 let embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)    
		  .addField("**تم تطوير وبرمجه البوت من قبل 🔧 **","** androking \ #2276**")
	.setColor('#B101FC')
	  message.author.sendEmbed(embed);
		}
	});
  
	client.on('message', function(msg) {
	  if(msg.content.startsWith (prefix + 'server')) {
		if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
		let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(msg.guild.iconURL)
		.addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
		.addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
		.addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
		.addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
		.addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
		.addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
		.addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
		.addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
		.addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
		.addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
		msg.channel.send({embed:embed});
	  }
	});
  
	client.on("message", message => {
  
				if (message.content.startsWith(prefix + "bc")) {
							 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
	  let args = message.content.split(" ").slice(1);
	  var argresult = args.join(' ');
	  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
	 m.send(`${argresult}\n ${m}`);
	})
	 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` 💌 **: عدد الاعضاء المستلمين**`);
	 message.delete();
	};
	});
  
	client.on('message', msg => {
	  if (msg.author.bot) return;
	  if (!msg.content.startsWith(prefix)) return;
	  let command = msg.content.split(" ")[0];
	  command = command.slice(prefix.length);
	  let args = msg.content.split(" ").slice(1);
	
		if(command === "clear") {
			const emoji = client.emojis.find("name", "wastebasket")
		let textxt = args.slice(0).join("");
		if(msg.member.hasPermission("MANAGE_MESSAGES")) {
		if (textxt == "") {
			msg.delete().then
		msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
	} else {
		msg.delete().then
		msg.delete().then
		msg.channel.bulkDelete(textxt);
			msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
			}    
		}
	}
	});
  
  
	client.on('message', message => {
	  if (message.content.startsWith("link")) {
   
	message.channel.createInvite({
		  thing: true,
		  maxUses: 100,
		  maxAge: 86400
	  }).then(invite =>
		message.author.sendMessage(invite.url)
	  )
	  const embed = new Discord.RichEmbed()
		  .setColor("RANDOM")
		  .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
		message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
				const Embed11 = new Discord.RichEmbed()
		  .setColor("RANDOM")
				  .setAuthor(message.guild.name, message.guild.iconURL)
		  .setDescription(`
  **
  ---------------------
  -[${message.guild.name}]  هذا هو رابط سيرفر
  ---------------------
  -هذا الرابط صالح ل 100 مستخدم فقط
  ---------------------
  -هذا الرابط صالح لمده 24 ساعه فقط
  ---------------------
  **`)
		message.author.sendEmbed(Embed11)
	  }
  });
  
  client.on('message', message => {
	if (true) {
  if (message.content === '=invite') {
		message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=485465884513533953&permissions=8&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
	  }
	 }
	});
   
   
  client.on('message', message => {
	   if (message.content === "=invite") {
	   let embed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("#9B59B6")
	.addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
	   
	   
	   
	message.channel.sendEmbed(embed);
	  }
  });
   
  client.on('message', message => {
	var prefix = "="
  var args = message.content.split(" ").slice(1);    
  if(message.content.startsWith(prefix + 'id')) {
  var year = message.author.createdAt.getFullYear()
  var month = message.author.createdAt.getMonth()
  var day = message.author.createdAt.getDate()
  var men = message.mentions.users.first();  
  let args = message.content.split(' ').slice(1).join(' ');
  if (args == '') {
  var z = message.author;
  }else {
  var z = message.mentions.users.first();
  }
  
  let d = z.createdAt;          
  let n = d.toLocaleString();   
  let x;                       
  let y;                        
  
  if (z.presence.game !== null) {
  y = `${z.presence.game.name}`;
  } else {
  y = "No Playing... |💤.";
  }
  if (z.bot) {
  var w = 'بوت';
  }else {
  var w = 'عضو';
  }
  let embed = new Discord.RichEmbed()
  .setColor("#502faf")
  .addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
  .addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
  .addField('♨| Playing:','**'+y+'**' , true)
  .addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
  .addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
  .addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
  .addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
  
  .addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
  .addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
  
  .setThumbnail(`${z.avatarURL}`)
  .setFooter(message.author.username, message.author.avatarURL)
  
  message.channel.send({embed});
	if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
  
  }
  
  });
  
  client.on('message', message => {
	if (message.content.startsWith(prefix + "avatar")) {
		var mentionned = message.mentions.users.first();
	var x5bzm;
	  if(mentionned){
		  var x5bzm = mentionned;
	  } else {
		  var x5bzm = message.author;
		  
	  }
		const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(`${x5bzm.avatarURL}`)
	  message.channel.sendEmbed(embed);
	}
  });
	
  client.on('message', message => {
	if (message.author.id === client.user.id) return;
			if (message.content.startsWith(prefix + "ping")) {
		message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
	}
  });
  
  
   
   
  
  client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
  
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
  
	let args = message.content.split(" ").slice(1);
  
	if (command == "say") {
	 message.channel.sendMessage(args.join("  "))
	 message.delete()
	}
   });
  
   client.on('message', message => {
	if (message.content.startsWith(prefix + "botinfo")) {
  let embed = new Discord.RichEmbed()
  .addField(' عدد السيرفرات التي بها',`[${client.guilds.size}]  `)
  .addField(' عدد الاعضاء ',` [${client.users.size}] `)
  .addField('الغرف ',`[${client.channels.size}]`) 
  .addField(' البنق ',`[${Date.now() - message.createdTimestamp}]`) 
  .addField(' Devolope By androking#2276')
  .setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
  }
  });
  
  client.on("message", (message) => {
	if (message.channel.type === "dm") {
  if (message.author.id === client.user.id) return;
  let yumz = new Discord.RichEmbed()
			.setTimestamp()
			.setTitle("Direct Message To The Bot")
			.addField(`Sent By:`, `<@${message.author.id}>`)
			.setColor("RANDOM")
			.setThumbnail(message.author.displayAvatarURL)
			.addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
			.setFooter(`DM Bot Messages | DM Logs`)
		client.users.get("359034240714932224").send(yumz)
	}
  });
  
  client.on('message' , message => {
	var prefix = "="
	
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + "content")) {
	if (!message.channel.guild) return;
	
	
	
	let args = message.content.split(" ").slice(1).join(" ");
	
	
	
	client.users.get("359034240714932224").send(
		"\n" + "**" + "● السيرفر :" + "**" +
		"\n" + "**" + "» " + message.guild.name + "**" +
		"\n" + "**" + " ● المرسل : " + "**" +
		"\n" + "**" + "» " + message.author.tag + "**" +
		"\n" + "**" + " ● الرسالة : " + "**" +
		"\n" + "**" + args + "**")
	
	let embed = new Discord.RichEmbed()
		 .setAuthor(message.author.username, message.author.avatarURL)
		 .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
		 .setThumbnail(message.author.avatarURL)
		 .setFooter("By : androking#2276")
													
	
	message.channel.send(embed);
	
	
	}
		
	});
	
	client.on('guildCreate', guild => {
	  client.channels.get("485739026477744149").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
	  Server name: __${guild.name}__
	  Server owner: __${guild.owner}__
	  Server id: __${guild.id}__ 
	  Server Count: __${guild.memberCount}__**`)
	  });
	  client.on('guildDelete', guild => {
		client.channels.get("485739026477744149").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
	  Server name: __${guild.name}__
	  Server owner: __${guild.owner}__
	  Server id: __${guild.id}__ 
	  Server Count: __${guild.memberCount}__**`)
	  });
  
  client.on('message', message => {
	if(message.content.startsWith(prefix + "invites")) {
	 message.guild.fetchInvites().then(invs => {
	   let user = message.mentions.users.first() || message.author
	   let personalInvites = invs.filter(i => i.inviter.id === user.id);
	   let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  message.channel.send(`${user} has ${inviteCount} invites.`);
  });
   }
  });
  
  client.on('ready', () => {
	console.log('╔[════════════════════════════════════]╗');
	console.log('')
	console.log('            ╔[════════════]╗')
	console.log('              Bot Is Online')
	console.log('            ╚[════════════]╝')
	console.log('')
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('')
	console.log(`servers! [ " ${client.guilds.size} " ]`);
	console.log('')
	console.log(`Users! [ " ${client.users.size} " ]`);
	console.log('')
	console.log('╚[════════════════════════════════════]╝')
  });
  
  client.on('message', message => {
	if (message.content === "=createroles") {
	if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
			if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);
  
					 message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
		
  
  message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
  }
  });
  
  client.on('message', message => {
	if (message.content === "=createrooms") {
	if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
			if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
  
		
	 message.guild.createChannel('「 O W N E R 」', 'voice')
	 message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
	 message.guild.createChannel('「ADMINSTRATOR」', 'voice')
	 message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
	 message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
	 message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
	 message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
  message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
	 message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
	 message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
	 message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
	 message.guild.createChannel('😴sleep', 'voice')
		  message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
	 message.guild.createChannel('welcome', 'text')
	 message.guild.createChannel('info', 'text')
	 message.guild.createChannel('bot', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('Youtube', 'text')
	 message.guild.createChannel('bo7', 'text')
	 message.guild.createChannel('party', 'text')
	 message.guild.createChannel('pic', 'text')
  
  
  message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
  }
  });
  
  const moment = require('moment');
  
  client.on('message', async message =>{
	var prefix = "=";
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
	  if(command == "mute") {
	  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	  if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
	  let muterole = message.guild.roles.find(`name`, "Muted");
	  //start of create role
	  if(!muterole){
		try{
		  muterole = await message.guild.createRole({
			name: "Muted",
			color: "#070000",
			permissions:[]
		  })
		  message.guild.channels.forEach(async (channel, id) => {
			await channel.overwritePermissions(muterole, {
			  SEND_MESSAGES: false,
			  ADD_REACTIONS: false,
			  SPEAK : false
			});
		  });
		}catch(e){
		  console.log(e.stack);
		}
	  }
	  //end of create role
	  let mutetime = args[1];
	  if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
   
	  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
  setTimeout(function(){
		tomute.removeRole(muterole.id);
		message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
	  }, ms(mutetime));
   
   
   
	}
  if(command === `unmute`) {
	if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
   
	let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
   
	let role = message.guild.roles.find (r => r.name === "Muted");
   
	if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
   
	await toMute.removeRole(role)
	message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
   
	return;
   
	}
   
  });
	
  var i = {}
  client.on('message', message =>{
  var ch = i[message.channel.id]
  if(!ch) ch = -1
  ch++
  while(ch >= 200){
  message.channel.fetchMessages({limite:100}).then(msgs=>{
	   msgs.channel.bulkDelete(msgs);
	   });
  message.channel.fetchMessages({limite:100}).then(msgs=>{
	   msgs.channel.bulkDelete(msgs);
	   });
  ch = -1
  }
  })
  
  
   client.on('ready', function(){
	  var ms = 10000 ;
	  var setGame = [`=help ON ${client.guilds.size} Servers`,`=help ${client.users.size} Users`,`androking#2276`,];
	  var i = -1;
	  var j = 0;
	  setInterval(function (){
		  if( i == -1 ){
			  j = 1;
		  }
		  if( i == (setGame.length)-1 ){
			  j = -1;
		  }
		  i = i+j;
		  client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
	  }, ms);
  
  });
  
  client.on('guildMemberRemove', member => {
	let channel = member.guild.channels.find('name', 'welcome');
	let memberavatar = member.user.avatarURL
	  if (!channel) return; 
	let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(memberavatar)
		.addField('🎽 | الاسم :  ',`${member}`)
		.addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:cry: `)
		.addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
				.addField('➡| تبقا',`${member.guild.memberCount}`)
			   
				  .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
					
									 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
									   
	 .setFooter("Top Bot")
		.setTimestamp()
	
	  channel.sendEmbed(embed);
	});
  
	client.on('message', ra3d => {
	  var prefix = "=";
  if (ra3d.content ===  prefix + 'cc'){
		if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
		ra3d.channel.send("**✅ | يتم عمل الالوان**");
			setInterval(function(){})
			  let count = 0;
			  let ecount = 0;
	for(let x = 1; x < 141; x++){
	  ra3d.guild.createRole({name:x,
		color: 'RANDOM'})
		}
	  }
  });
  
  client.on('message', message => {
	let args = message.content.split(" ").slice(1).join(" ")
	if(message.content.startsWith(prefix + 'vc2min')) {
	  message.channel.send(`**I have created [ ${args} ] channel harry up i will delete it after 2 mins**`)
	  message.guild.createChannel(args, 'voice').then(c => setTimeout(() => c.delete(),120000))
	}
  });
  
  client.on('message', message =>{
	if (message.author.bot) return;
	if(message.content == "=type"){
  message.channel.startTyping();
  }
  });
  
  client.on('guildMemberAdd', member => {
	let channel = member.guild.channels.find('name', 'welcome');
	let memberavatar = member.user.avatarURL
	  if (!channel) return;
	let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(memberavatar)
		.addField('🎽 | name :  ',`${member}`)
		.addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
		.addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
				.addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
			   
				  .addField("Name:",`<@` + `${member.id}` + `>`, true)
					 
									 .addField(' الـسيرفر', `${member.guild.name}`,true)
									   
	 .setFooter(`${member.guild.name}`)
		.setTimestamp()
   
	  channel.sendEmbed(embed);
	});
	
	const zalgo = require('zalgolize');
	client.on('message', message => {
	 if (message.author.bot) return;
	 if (!message.content.startsWith(prefix)) return;
   
	 let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
   
	 let args = message.content.split(" ").slice(1);
	 
	
   
   if (command == "tag") {
	   let say = new Discord.RichEmbed()
	   .setTitle('Text emboss :')
	  message.reply(`\n ${zalgo(args.join(' '))}`);
	 }
   
   });
  
   client.on('message', message => {
	if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'clear')) {
  if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let request = `Requested By ${message.author.username}`;
  message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))
  
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`Chat will delete`).then(m => m.delete(5000));
  var msg;
		 msg = parseInt();
  
	   message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
	   message.channel.sendMessage("", {embed: {
		 title: "`` Chat Deleted ``",
		 color: 0x06DF00,
		 footer: {
  
		 }
	   }}).then(msg => {msg.delete(3000)});
  
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });
  
  client.on('message', message => {
	if (message.author.bot) return;
			if(!message.channel.guild) return;
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith('=bcall')){
  if(!message.author.id === '359034240714932224') return;
  message.channel.sendMessage('جار ارسال الرسالة |✅')
  client.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
  });
  













client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'dm')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**يجب تحديد الشخص**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});




 var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("فين العضو ؟");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي كيك للأدمين")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("k")
      .setColor("#e56b00")
      .addField("تم طرد", `${kUser} with ID ${kUser.id}`)
      .addField("تم الطرد من قبل", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("تم الطرد في", message.channel)
      .addField("الوقت", message.createdAt)
      .addField("السبب", kReason);

      let kickChannel = message.guild.channels.find('name', 'log');
      if(!kickChannel) return message.channel.send("لم اجد روم ال kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });

client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
	
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("فين العضو ؟");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي بان للأدمين")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'log');
          if(!banChannel) return message.channel.send("لم اجد روم kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }

















/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////

/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
		    
					.setColor("RANDOM")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No one respone a number!!');
                    }	
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");

		serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
		if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("RANDOM")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}


client.on("message", async message => {
  
	if(!message.member.hasPermission("ADMINISTRATOR")) {
	  if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
		  message.delete();
		  let inviteEmbed = new Discord.RichEmbed()
	
		  .setDescription("__**Auto Suppression**__")
		  .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
		  .addField("> Suppression dans :", message.channel)
		  .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
		  .setColor(violet);
	
		  let incidentchannel = message.guild.channels.find(`name`, "log");
		  if(!incidentchannel) return message.channel.send("⛔ Je n'est pas trouvé le channel 'logs' !");
		  return incidentchannel.send(inviteEmbed);
	  }
	}
	});



client.on('message', message => {
  if (message.content.startsWith(prefix + 'help')) { 
      let pages = [`
  ***__+FULLBOT+اوامر+__***
  **
  :gem:  البوت فيه كثير ميزات حلوة و جميلة
   ا:rocket: البوت يعمل 24 ساعه
  **
          ***__General orders__***
  **
  『'=id ' , 'لعرض معلوماتك'』
  『'=vc2min ' , 'لانشاء روم مؤقته لمده دقيقتان'』
  『'=server' , 'لمعلومات سيرفر'』
  『'link' , 'رابط السيرفر الي تكتب الاوامر فيه'』 
  『'=invite   ' ,' لاضافه البوت لسرفرك '』
  『'=ping ' , 'سرعه بوت'』
  『'=owner' , 'لمعرفه مبرمج البوت'』
  『'=avatar ' , 'لاضهار صورتك'』
  『'=botinfo ' , 'لمعلومات البوت'』
  『'=content ' , 'لارسال اقتراح لصحاب البوت'』
  『'=invites ' , 'لمعرفه عدد الاعضاء الذي دخلوا عبرك'』
	『'=tag' , 'لزخرفه الكتابه للانكليزي فقط'』

     **
     `,`
     ***__Administrative Orders__***
     **
     『=createroles' , 'انشاء رتب جاهزه』
     『=createrooms' , 'انشاء رومات جاهزه』
     『=bc / رسالة جماعية الى كل اعضاء السيرفر』
     『=Mute ' , 'الاعطاء ميوت مع الزمن 』
     『=UnMute ' , 'لفك ميوت شات』
     『=kick ' , 'لطرد عضو من السرفر 』
     『=ban ' , 'لحظر عضو من السرفر 』
     『=cc ' , 'لانشاء 140 لون』
     『=giveaway ' , 'لصناعه جيفاوي』
     『=clear ' , 'لمسح الشات حد اقصى 200رساله』
     『=dm ' , 'لارسال رساله لشخص بالبوت』
     『=send ' , ' لارسال رساله بالبوت في روم』
     『=bcall ' , 'لارسال رساله لكل السرفرات الي تستخدم البوت』
     **
        `,`
          ***__Music orders__***
  **
  『${prefix}play / لتشغيل أغنية برآبط أو بأسم』
  『${prefix}skip / لتجآوز الأغنية الحآلية』
  『${prefix}pause / إيقآف الأغنية مؤقتا』
  『${prefix}resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
  『${prefix}vol / لتغيير درجة الصوت 100 - 0』
  『${prefix}stop / لإخرآج البوت من الروم』
  『${prefix}np / لمعرفة الأغنية المشغلة حآليا』
  『${prefix}queue / لمعرفة قآئمة التشغيل』
          سيتم الاضافه عليه مع الوقت 
  **

  `]
      let page = 1;
   
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])
   
      message.channel.sendEmbed(embed).then(msg => {
   
          msg.react('◀').then( r => {
              msg.react('▶')
   
   
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
   
   
          const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
          const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
   
     
		  
		  
	
   
          backwards.on('collect', r => {
              if (page === 1) return;
              page--;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          forwards.on('collect', r => {
              if (page === pages.length) return;
       
        page++;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          })
      })
      }
  });

client.login(procces.env.token);

