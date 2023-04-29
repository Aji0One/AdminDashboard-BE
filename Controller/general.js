const User = require("../Models/User");
const OverallStat = require("../Models/OverallStat");
const Transaction = require("../Models/Transaction");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    //hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    // Recent Transaction

    const transaction = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    //Overall Stats

    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transaction,
    });
  } catch (err) {
    res.status(400).json({ messsage: err.message });
  }
};

module.exports = { getUser, getDashboardStats };
