import User from '../models/user.model.js'

export const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            count: User.length,
            users
        })
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateUserRole = async(req,res)=>{
    try {
        const {role} = req.body;
        
        const user = await User.findById(req.params.id);

        if(!user){
             return res.status(404).json({
        message: "User not found"
      });
        }

        user.role = role;
    await user.save();

    res.status(200).json({
      message: "User role updated",
      user
    });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.status = status; // active , inactive
    await user.save();

    res.status(200).json({
      message: "User status updated",
      user
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};