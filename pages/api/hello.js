import axios from 'axios';
import { error } from "next/dist/build/output/log";

export default async (req, res) => {
  const METHOD = 'sendMessage';
  const url = `${process.env.TELEGRAM_API_URL}bot${process.env.TELEGRAM_TOKEN}/${METHOD}?chat_id=${process.env.TELEGRAM_CHAT_ID}&parse_mode=html&text=`;
  const { body } = req;
  if (body) {
    let data = '';
    for (const [key, value] of Object.entries(body)) {
      data += `<b>${key}:</b> ${value}\n`;
    }
    try {
      const result = await axios.get(url + encodeURIComponent(data));
      res.statusCode = 200;
      res.json(result.data);
    } catch (err) {
      res.statusCode = 400;
      res.json(err.response.data);
    }
  }
}

// https://api.telegram.org/bot1251929263:AAGdopBMaHizooBAIzNQjhe4tritZ2oLJX4/getUpdates