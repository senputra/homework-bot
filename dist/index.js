"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as bodyParser from "body-parser";
const bodyParser = require("body-parser");
const express = require("express");
const localtunnel = require("localtunnel");
const bot_1 = require("./bot");
class Server {
    constructor() {
        this.app = express();
        bot_1.Bot.setId("1035529574:AAFfYoMYT4AKW7JICQUQvOk19TfBkPjAgDI");
        this.app.use(bodyParser.json()); // for parsing application/json
        this.app.use(bodyParser.urlencoded({
            extended: true
        })); // for parsing application/x-www-form-urlencoded
        this.app.post("/", function (req, res) {
            let message = req.body.message;
            let entities = req.body.message.entities || "";
            let text = req.body.message.text;
            console.log(req.body);
            if (message.from.username == "nasrinnfa") {
                bot_1.Bot.sendMessage("@nasrinnfa shut up bitch", message.chat.id);
                res.end("ok");
            }
            else if (!!entities) {
                switch (entities[0].type) {
                    case "mention":
                        if (String(text.substr(17, 6)).toLowerCase() == "hi") {
                            bot_1.Bot.sendMessage("Hallo", message.chat.id);
                        }
                        else if (String(text.substr(17, 6)).toLowerCase() == "add hw") {
                            Server._addHomework(text.substr(23));
                            bot_1.Bot.sendMessage(`${text.substring(23)} added to the HW list`, message.chat.id);
                            res.end("ok");
                        }
                        else {
                            return res.end();
                        }
                        break;
                    case "bot_command":
                        break;
                }
            }
            return res.end();
        });
    }
    static _addHomework(hw) {
        this._homework = [...this._homework, hw];
        console.log(this._homework);
    }
    static _removeHomework(index) {
        this._homework.splice(index, 1);
        console.log(this._homework);
    }
    run() {
        this.app.listen(3000, () => console.log("listening"));
        localtunnel(3000, {
            subdomain: "sweet-bird-41"
        }, (err, tunnel) => console.log(`${err} ${tunnel}`));
    }
}
Server._homework = [];
const mServer = new Server();
mServer.run();
//# sourceMappingURL=index.js.map