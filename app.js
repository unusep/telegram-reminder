const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config()

const botToken = process.env.BOT_TOKEN;

function getUpdate(req){
    return req.body;
}
function getCommand(update){
    const text = update.message.text;
    if (!!text){
        return text.split(" ");
    } else {
        return [];
    }
}

const handleUpdate = (req, res) => {
    const update = getUpdate(req);
    const [command, ...args] = getCommand(update);
    console.log(command);
    switch (command) {
        case "remind":
            break;
        default:
            // handle
    }
    res.sendStatus(200);
}
app.post("/" + botToken, handleUpdate);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
