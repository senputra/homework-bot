import Axios from 'axios';

export class Bot {
  private static _id: string = "";

  static setId(id: string) {
    this._id = id;
  }

  static getId() {
    return this._id;
  }

  static isReady() {
    if (!!this._id) {
      return true;
    } else {
      console.log("Bot has no Id set");
      return false;
    }
  }

  static sendMessage(message: string, chatId: string) {
    Axios.post(
      `https://api.telegram.org/bot${this._id}/sendMessage`,
      {
        chat_id: chatId,
        text: message
      }
    )
      .then(response => {
        console.log("Message posted");
      })
      .catch(err => {
        console.log("Error :", err);
      });
  }


}
