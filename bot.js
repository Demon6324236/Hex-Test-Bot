import java.util.*
    
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

    @client.event
    async def on_ready():
        print('~~~~~~~~~~~~~~~~~~~~~~~~~')
        print('Logged in as: ')
        print(client.user.name)
        print(client.user.id)
        print('~~~~~~~~~~~~~~~~~~~~~~~~~')

    @client.event
    async def on_message(message):
        if message.content == "Good day":
            await client.send_message(message.channel, "World")

    client.run(<FbWg2EuAlSRoLB5s3TNI9IW4PtfECRi3>) //key



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
                
      fun main(args: Array<String>) {
       val control = 10
       if control = 10 {
         printIn("Bot now active! ")
           
         printIn("Please set a command prefix up to 2 characters! Prefix is currently set to" substr)
           if (message.substring(0, 1) == '+') {
           val substr = readline()!!
           if length(substr >2){
               printIn("Command is too long! ")
           }
           else {
          .substring = readLine()!! //std::cin
           }
      }
          
                bot.sendMessage({
                    to: channelID,
                    message: 'Substring set to '$substr''
                 )}
          control = 0 
             }
   }
    
val stringInput = readLine()!!
    
  if $stringInput = .substring(commands) {
    printIn($substring"commands : list of basic commands ")
    printIn($substring"meme : posts a meme")
    printIn($substring"memelist : meme selection list")
    printIn($substring"memecat : meme catagories list")

}

  if $stringInput = $prefix memelist { //meme list
      printIn($substring""printIn($substring"" ) )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
      printIn($substring"" )
}    
    
  if $stringInput = $prefix memecat {
          
    
    
  if $stringInput = $prefix meme {
    
    
}

  if $stringInput = $prefix memecat {
    
    
}







    
}  //fun main
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  