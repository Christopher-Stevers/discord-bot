console.log('Hello, world!');
// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
// Create a new client instance that can read messages and respond to them
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        // allow send messages
        
    ]
});


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
    //  send a message to the server
    //  readyClient.channels.cache.get('channel_id')?.send('Hello, world!');
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// console.log each message sent in the chat
client.on(Events.MessageCreate, message => {
  //delete message
    // send a message to the server
    if(message.author.bot) return
    
  message.delete()
  console.log("delete")
     message.channel.send(message.content);
});


// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);
