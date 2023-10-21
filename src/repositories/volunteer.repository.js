import { Volunteer } from "../models/user.model.js";

class VolunteerRepository {
  constructor() {}

  getAllVolunteers = async () => {
    try {
      const volunteersList = await Volunteer.find();
      return volunteersList;
    } catch (error) {
      throw error;
    }
  };
}

export const volunteerRepository = new VolunteerRepository();
