const fs = require('fs/promises');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const filePath = path.join(__dirname, '..', 'public', 'voters.json');

  try {
    let votes = [];

    try {
      const data = await fs.readFile(filePath, 'utf8');
      votes = JSON.parse(data);
    } catch {
      console.warn('voters.json not found. Creating new.');
    }

    votes.push(req.body);
    await fs.writeFile(filePath, JSON.stringify(votes, null, 2));
    res.status(200).json({ message: 'Vote saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save vote' });
  }
};
