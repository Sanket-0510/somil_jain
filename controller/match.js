
import { Match } from "../model/match.js";
const createMatchController = async (req, res) => {
  try {
    const { team_1, team_2, date, venue } = req.body;
    const match = await Match.create({
      team_1,
      team_2,
      date,
      venue
    });

    // Construct the response data
    console.log(match)
    const responseData = {
      message: "Match created successfully",
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error("Error creating match:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the controller function
export { createMatchController };
