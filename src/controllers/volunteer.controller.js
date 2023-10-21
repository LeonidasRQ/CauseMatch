import { volunteerService } from "../services/volunteer.service.js";

export const getAllVolunteers = async (req, res) => {
  const volunteersList = await volunteerService.getAllVolunteers();
  console.log(volunteersList);
  return res.send({
    status: "success",
    payload: volunteersList,
  });
};
