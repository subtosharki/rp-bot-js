module.exports = {
    name: "cuff",
    description: "cuffs the person you @",
    execute(message, args) {
      const user = message.author;
      const taggedUser = message.mentions.users.first();
        if (taggedUser === undefined) {
            message.reply("Please mention someone");
            return;
          }
		message.channel.send(`${taggedUser} ${User} has handed you their ID.`);
    },
};