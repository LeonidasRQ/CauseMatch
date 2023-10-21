import { Schema, model } from "mongoose";

const activityCollection = "Activities";

const activitySchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    spotsAvailable: {
      type: Number,
      required: true,
    },
    skills: {
      type: Array,
      default: [],
    },
    categories: {
      type: Array,
      default: [],
    },
    organized_by: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  options
);

export const Activity = model(activityCollection, activitySchema);
