import { Command } from '../types';

const co: Command = {
  name: 'co',
  description: 'co?',
  args: 'prohibited',
  cooldown: 60,
  execute(msg) {
    return msg.channel.send({
      files: [
        {
          attachment: 'https://i.pinimg.com/564x/bc/c1/5a/bcc15ab1b66968db9d09ffffd5b98323.jpg',
        },
      ],
    });
  },
};

export default co;
