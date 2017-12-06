import java.util.*
    
npm install discord.io winston --save //?
using Discord;
using Discord.Commands;
using System;
using System.Collections.Generic;
using System.Ling;
using System.Text;
using System.Threading.Tasks;


    import discord
    import asyncio

    client = discord.Client()

    @client.event
    async def on_ready():
        print('Logged in as: ')
        print(client.user.name)
        print(client.user.id)
        print('~~~')

    @client.event
    async def on_message(message):
        if message.content == "Good day":
            await client.send_message(message.channel, "World")

    client.run(<FbWg2EuAlSRoLB5s3TNI9IW4PtfECRi3>)



/*
namespace MemeBot
{
    class MyBot
    {
        DiscordClient discord;
        public MyBot()
        {
            discord = new DiscordClient (x =>
                                         {
                x.LogLevel = LogSeverity.Info;
                x.LogHandler = Log;
            });
            discord.ExecuteAndWait (async () =>
            {
                await discord.Connect("FbWg2EuAlSRoLB5s3TNI9IW4PtfECRi3"); //bot secret code
            });
        }
    }
}


    
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
  
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
     }
});

*/
/*NOTES
  use "val" (or "var") to declare a variable.
  get function - returns character at the specified index. used for strings.   fun get(index: int) replace int with the item #
  s1.get(2) is the same as s1[2] which is used to pull a string from the array
  fun readLine ("some random ass words"):

*/

/*string template

  fun main(args: Array<String>) {
      var a = 1
      // simple name in template:
      val s1 = "a is $a" 

      a = 2
      // arbitrary expression in template:
      val s2 = "${s1.replace("is", "was")}, but now is $a"
      println(s2)
  } 
  
input
  val myInt = 5;
    val myString = "myInt = $myInt"    makes it say "myint = (value of myint)

    println(myString)
  output
    myInt = 5
*/
    //println(String.trimMargin())  this will trim the extra crap
/*


fun main(args: Array<String>) {
    val memeList1: string
    val memeList1 = "memeList1 active!" //first thing said

    for (item in myString) {
        println(item)
    }
}
*/



















































bot.on('message', function (user, userID, channelID, message,) {
   
    if (message.substring(0, 1) == '+') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            
            case 'ping': //+ping
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
        }   
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }            
                
      //code start
      fun main(args: Array<String>) {
       val control = 10
       if control = 10 {
         printIn("Bot now active! ")
         printIn("Please set a command prefix! ")
           if (message.substring(0, 1) == '+') {
          .substring = readLine()!!
          val substr = readline()!!
                bot.sendMessage({
                    to: channelID,
                    message: 'Substring set to '$substr''
                 )}
          control = 0 
             }
   }
    
val stringInput = readLine()!!
    
  if $stringInput = .substring(commands) {
    printIn("'$substring' commands : list of basic commands ")
    printIn(".substring.meme : posts a meme")
    printIn("$prefix memelist : meme selection list")
    printIn("$prefix memecat : meme catagories list")
/*    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
    printIn("$prefix ")
*/
}

  if $stringInput = $prefix memelist { //meme names
    printIn("$prefix saltintensifies ")
    printIn("$prefix shade ")
    printIn("$prefix thinking ")
    printIn("$prefix rollsafe ")
    printIn("$prefix consider ")
    printIn("$prefix catintensifies ")
    printIn("$prefix triggeredcat ")
    printIn("$prefix triggered ")
    printIn("$prefix outrage ")
    printIn("$prefix lenny ")
    printIn("$prefix whowouldathought ")
    printIn("$prefix crying ")
    printIn("$prefix beetlejuice ")
    printIn("$prefix scissorhands ")
    printIn("$prefix noose ")
    printIn("$prefix hangyourself ")
    printIn("$prefix koolaid ")
    printIn("$prefix computerfire ")
    printIn("$prefix razor ")
    printIn("$prefix yell ")
    printIn("$prefix pinhead ")
    printIn("$prefix annoyed ")
    printIn("$prefix troll ")
    printIn("$prefix tard ")
    printIn("$prefix reposted ")
    printIn("$prefix christianserver ")
}    
    
  if $stringInput = $prefix memecat {
    printIn("Meme catagories: ")
    printIn("$prefix cemo ")
    printIn("$prefix ccringe ")
    printIn("$prefix ccat ")
    printIn("$prefix cfamilyguy ")
    printIn("$prefix cspongebob ")
    printIn("$prefix ckoolaid ")
    printIn("$prefix ctard ")
    printIn("$prefix cwhatif ")
}
    
    
  if $stringInput = $prefix meme {
    
    
}

  if $stringInput = $prefix memecat {
    
    
}







    
}  //fun main
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  