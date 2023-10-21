import { Schema, model } from "mongoose";

const userCollection = "Users";
const options = { discriminatorKey: "role" };

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    interests: {
      type: Array,
      default: [],
    },
  },
  options
);

export const User = model(userCollection, userSchema);

export const Volunteer = User.discriminator(
  "volunteer",
  new Schema(
    {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      skills: {
        type: Array,
        default: [],
      },
    },
    options
  )
);

export const Organization = User.discriminator(
  "organization",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      website: {
        type: String,
        required: true,
      },
    },
    options
  )
);
