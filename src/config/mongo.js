import mongoose from "mongoose";
import config from "./config.js";

const {
  mongo: { url },
} = config;

const database = {
  connect: async () => {
    try {
      await mongoose.connect(url);
      console.log("Connected to DB");
    } catch (error) {
      throw "error ocurred: " + error;
    }
  },
};

export default database;
