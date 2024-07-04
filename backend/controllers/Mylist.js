import { UserList } from "../models/userListModel.js";
import mongoose from "mongoose";

export const Mycardsent = async (req, res) => {
  try {
    const {user, card_id, img_url, mediaType } = req.body;

    // Validate request body
    if (!user || !card_id || !img_url || !mediaType) {
      return res.status(400).json({
        msg: "Failed to get the card. Please provide user, card_id, img_url, and mediaType.",
        success: false,
      });
    }

    // Check if the card already exists in the user's list
    const existingCard = await UserList.findOne({ card_id });
    if (existingCard) {
      return res.status(409).json({
        msg: "Card already exists in the favorite list.",
        success: false,
      });
    }

    // Create new card in the user's list
    await UserList.create({
        user,
      card_id,
      img_url,
      mediaType,
    });

    res.status(200).json({
      msg: "Added to Favourite List",
      success: true,
    });
  } catch (error) {
    console.error("Unable to get the card:", error);
    res.status(500).json({
      msg: "Server error. Please try again later.",
      success: false,
    });
  }
};


export const Mycardrecieved = async (req, res) => {
    try {
      const { user } = req.body;
  
      // Validate the user input
      if (!user ) {
        return res.status(400).json({
          msg: "Invalid user ID format.",
          success: false,
        });
      }
  
      // Convert user to ObjectId
      const userId =new mongoose.Types.ObjectId(user);
  
      // Perform the aggregation query to match documents by user
      const userCards = await UserList.aggregate([
        {
          $match: {
            user: userId, // Match by ObjectId
          },
        },
        {
          $project: {
            _id: 0, // Exclude _id field bcoz not needed
            card_id: 1,
            img_url: 1,
            mediaType: 1,
          },
        },
        // Add more stages as needed (e.g., $sort, $limit, $group)
      ]);
  
      res.status(200).json({
        msg: "User cards retrieved successfully.",
        success: true,
        userCards,
      });
    } catch (error) {
      console.error("Unable to retrieve user cards:", error);
      res.status(500).json({
        msg: "Server error. Please try again later.",
        success: false,
      });
    }
  };
  
 export const deletecard = async (req,res)=>{
    const {card_id} =req.body
    if(!card_id){
      return res.status(404).json({
        msg:"could not get the card",
        success:false
      })
    }
    try {
      const result = await UserList.deleteOne({card_id : card_id})
       if(result.deletedCount ===0){
        return res.status(400).json({
          msg:"Card could not be deleted",
          success:false
        })
       }
       return res.status(200).json({
        msg:"Movie removed from the List",
        success:true
       })
   } catch (error) {
    console.log("Error in deleting the Card",error)
   }
  }