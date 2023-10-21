import { volunteerRepository } from "../repositories/volunteer.repository.js";

class VolunteerService {
  constructor() {}

  getAllVolunteers = async () => {
    try {
      const volunteersList = await volunteerRepository.getAllVolunteers();
      return volunteersList;
    } catch (error) {
      throw error;
    }
  };
}

export const volunteerService = new VolunteerService();
