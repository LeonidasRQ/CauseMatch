import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 8080,
  mongo: {
    url: process.env.DB_URL,
  },
};
