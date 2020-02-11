"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Bot {
    static setId(id) {
        this._id = id;
    }
    static getId() {
        return this._id;
    }
    static isReady() {
        if (!!this._id) {
            return true;
        }
        else {
            console.log("Bot has no Id set");
            return false;
        }
    }
    static sendMessage(message, chatId) {
        axios_1.default.post(`https://api.telegram.org/bot${this._id}/sendMessage`, {
            chat_id: chatId,
            text: message
        })
            .then(response => {
            console.log("Message posted");
        })
            .catch(err => {
            console.log("Error :", err);
        });
    }
}
exports.Bot = Bot;
Bot._id = "";
//# sourceMappingURL=bot.js.map