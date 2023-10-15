const { Telegraf } = require("telegraf");
const { getLyrics } = require("genius-lyrics-api");
require("dotenv").config();
/**
 * Steps to get secret token for creating a bot
 * -> Open telegram and search for BotFather
 * -> Start
 * -> To create a new bot type /newbot and enter
 * -> Give botname and username ending with bot
 * -> Our bot is ShadyLyricsBot
 * -> https://t.me/ShadyLyricsBot
 */

const bot = new Telegraf(process.env.TELEGRAM_API_KEY);
console.log(process.env.TELEGRAM_API_KEY)
bot.start((ctx) => ctx.reply("Welcome to shady lyrics stan"));

bot.command("whomadethis", (ctx) => ctx.reply("Abhinav"));
bot.on("sticker", (ctx) => ctx.reply("❤️"));

bot.command("lyrics", async function (ctx) {
  let songName = ctx.message.text.substring(8);
  const options = {
    apiKey: process.env.GENIUS_API_KEY,
    title: songName,
    artist: "Eminem",
    optimizeQuery: true,
  };
  let lyrics;
  await getLyrics(options).then((llyrics) => {
    lyrics = llyrics;
  });

  await ctx.reply(lyrics.substring(0, 4095));
  if (lyrics.length > 4095) ctx.reply(lyrics.substring(4095));
});
bot.launch();
