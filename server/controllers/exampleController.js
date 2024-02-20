// server/controllers/exampleController.js

const ExampleModel = require('../models/exampleModel');

exports.getExamples = async (req, res) => {
  try {
    const examples = await ExampleModel.findAll();
    res.json(examples);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createExample = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newExample = await ExampleModel.create({ name, description });
    res.json(newExample);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Other controller methods as needed...
