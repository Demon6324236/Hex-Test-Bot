import java.util.* //packages
    
npm install discord.io winston --save //? installing bot to server
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

    @client.event //login info
    async def on_ready():
        printIn('`~~~~~~~~~~~~~~~~~~~~~~~~~`')
        print('`Logged in as: `')
        print(`client.user.name`)
        print(`client.user.id`)
        printIn('`~~~~~~~~~~~~~~~~~~~~~~~~~`')

    @client.event //greeter
    async def on_message(message):
        if message.content == "Hello":
            await client.send_message(message.channel, "`Welcome`")

    client.run(<FbWg2EuAlSRoLB5s3TNI9IW4PtfECRi3>) //key



bot.on('message', function (user, userID, channelID, message,) { //pinger
   
    if (message.substring(0, 1) == '+') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            
            case 'ping': //+ping
                bot.sendMessage({
                    to: channelID,
                    message: '`Pong`!'
                });
                
            case 'pinger': //+pinger
                bot.sendMessage({
                    to: channelID,
                    message: '`Ponger!`'
                });
            break;
        } 
    }            
                
        
      fun main(args: Array<String>) { //main function
       val control = 10
          
       if control == 10 {
         printIn("`Bot now active!` ")
           
         printIn("`Please set a command prefix up to 2 characters! Prefix is currently set to" substr"`")
           if (message.substring(0, 1) == '+') {
           val substr = readline()!!
           if length(substr >2){
               printIn("`Command prefix is too long! Command prefix can be up to 2 characters.`")
           }
           else {
          .substring = readLine()!! //std::cin //sets command prefix from readLine
           }
      }
          
                bot.sendMessage({
                    to: channelID,
                    message: '`Substring set to '$substr'`'
                 )}
          control = 0 
             }
   }
    
val stringInput = readLine()!!
    
  if $stringInput == .substring(commands) {
    printIn("`"$substr"commands : list of basic commands `")
    printIn("`"$substr"meme : posts a meme`")
    printIn("`"$substr"memelist : meme selection list`")
    printIn("`"$substr"memecat : meme catagories list`")

}

  if $stringInput == substring.memelist { //meme list
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      printIn("`"$substr"memename `")
      
      
}    
    
  if $stringInput == substring.memecat {
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
      printIn("`"$substr"memecat `")
  }
    
    
  if $stringInput == substring.meme {
      printIn("`"  `") //add a random number generator and a list of imgur links to pull from for the random memes
    
}






    
}  //fun main
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  