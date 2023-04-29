const OverallStat = require("../Models/OverallStat");

const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getSales };
