const { getRecommendation } = require("../services/recommendationService");
const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/response");

/**
 * @route   POST /api/ai/recommendation
 * @access  Private
 * Body (all optional): { age, fitnessGoal, experienceLevel } - anything not sent
 * is taken from the user's saved fitness profile.
 */
const getWorkoutRecommendation = asyncHandler(async (req, res) => {
  const data = await getRecommendation(req.user, req.body);
  return sendSuccess(res, 200, "AI recommendation generated successfully.", data);
});

module.exports = { getWorkoutRecommendation };
