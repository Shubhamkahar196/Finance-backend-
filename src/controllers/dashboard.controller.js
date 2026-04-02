import Record from "../models/record.model.js";

// getsummary( income,expense,balance)

export const getSummary = async (req, res) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const expense = await Record.aggregate([
      { $match: { type: "expense", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpense = expense[0]?.total || 0;

    res.status(200).json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// category wise total
export const getCategoryWise = async(req,res)=>{
    try {
         const data = await Record.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: { category: "$category", type: "$type" },
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.status(200).json(data);
    } catch (error) {
       res.status(500).json({ message: "Server Error" }); 
    }
}

// recent transactions
export const getRecentTransactions = async (req, res) => {
  try {
    const records = await Record.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json(records);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// monghtly
export const getMonthlyTrends = async (req, res) => {
  try {
    const trends = await Record.aggregate([
      { $match: { isDeleted: false } },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            year: { $year: "$date" },
            type: "$type"
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    res.status(200).json(trends);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};