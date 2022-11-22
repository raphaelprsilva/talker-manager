const fs = require('fs').promises;

const readTalkerFile = async () => {
  try {
    const file = await fs.readFile('./talker.json', 'utf-8');
    return JSON.parse(file);
  } catch (err) {
    console.error(err);
  }
};

const writeTalkerFile = async (talker) => {
  try {
    await fs.writeFile('./talker.json', JSON.stringify(talker));
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  readTalkerFile,
  writeTalkerFile,
};
