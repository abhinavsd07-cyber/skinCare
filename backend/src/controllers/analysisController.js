const Analysis = require('../models/Analysis');

// @desc    Analyze face image and generate mock skincare data
// @route   POST /api/analysis/analyze-face
// @access  Public (should be Private in real app with Auth)
const analyzeFace = async (req, res) => {
  try {
    // In a real application, req.file or req.body.image would contain the image
    // You would send it to a real AI API like Google Vision, or a custom ML model

    // Simulate AI processing delay (e.g., 2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate Mock AI Data for Skin Analysis
    const mockOverallScore = Math.floor(Math.random() * (95 - 65) + 65); // Random between 65 and 95

    const mockMetrics = {
      hydration: Math.floor(Math.random() * (95 - 50) + 50),
      elasticity: Math.floor(Math.random() * (95 - 50) + 50),
      pores: Math.floor(Math.random() * (95 - 50) + 50),
      texture: Math.floor(Math.random() * (95 - 50) + 50),
      radiance: Math.floor(Math.random() * (95 - 50) + 50),
    };

    const mockConcerns = [
      { name: "Visible Pores", score: Math.floor(Math.random() * 40), severity: "Mild" },
      { name: "Uneven Tone", score: Math.floor(Math.random() * 40), severity: "Mild" },
      { name: "Fine Lines", score: Math.floor(Math.random() * 40), severity: "Mild" }
    ];

    // Assuming we have a mock user ID for now since Auth isn't fully integrated in frontend yet
    // In production, we'd use req.user._id from JWT middleware
    const mockUserId = "60d0fe4f5311236168a109ca"; // Needs a valid ObjectId format

    const newAnalysis = {
      // user: mockUserId, // Commented out to avoid reference errors if user doesn't exist
      overallScore: mockOverallScore,
      metrics: mockMetrics,
      concerns: mockConcerns
    };

    // We can save this to DB if we want to track history
    // const savedAnalysis = await Analysis.create(newAnalysis);

    res.status(200).json({
      success: true,
      message: 'Face analysis complete',
      data: newAnalysis
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Analysis failed' });
  }
};

module.exports = {
  analyzeFace
};
