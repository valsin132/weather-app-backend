import Search from '../models/searchModel.js'

export const getSearches = async (req, res) => {
  try {
    const cars = await Search.find({})
    res.status(200).json(cars)
  } catch (err) {
    return res.status(500).send('Error fetching searches')
  }
}

export const addSearch = async (req, res) => {
  try {
    const { selectedCity } = req.body

    if (!selectedCity) {
      return res.status(400).json({ message: 'City is required' })
    }

    const newSearch = new Search({ selectedCity })
    await newSearch.save()
    //const savedSearch = await newSearch.save()

    // res.status(201).json(savedSearch) // Sends back the saved search

    res.status(201).json({ message: 'Search saved successfully', search: newSearch })
  } catch (err) {
    res.status(500).json({ message: 'Error saving search', error: err.message })
  }
}
