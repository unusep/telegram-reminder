const express = require('express');
const app = express();
require('dotenv').config();

const botToken = process.env.BOT_TOKEN;

const handleUpdate = (req, res) => {
    const update = getUpdate(req);
    const command = getCommand(update);
    switch (command) {
        case "remind":
            break;
        default:
            // handle
    }
}

app.post(`/{bot_Token}`, handleUpdate);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
