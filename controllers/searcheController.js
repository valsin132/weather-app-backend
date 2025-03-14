import Search from '../models/searchModel.js';

export const addSearch = async (req, res) => {
  try {
    const { selectedCity } = req.body;

    if (!selectedCity) {
      return res.status(400).json({ message: 'City is required' });
    }

    // Find the city in the database or create a new entry
    const search = await Search.findOneAndUpdate(
      { selectedCity },
      { $inc: { views: 1 } },
      { upsert: true, new: true },
    );

    res.status(201).json({ message: 'Search saved successfully', search: search });
  } catch (err) {
    res.status(500).json({ message: 'Error saving search', error: err.message });
  }
};

export const topSearches = async (req, res) => {
  try {
    const topCities = await Search.find({})
      .sort({ views: -1 }) // sort by views in descending order
      .limit(3); // limit to 3 results

    res.status(200).json(topCities);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching top cities', error: err.message });
  }
};
