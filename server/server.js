const express = require('express');
const mongoose = require('mongoose'); 

// const cors = require('cors');
// app.use(cors());



mongoose.connect('mongodb://localhost:27017/Chef_Booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const app = express();
const port = 4000; 


app.use(express.json());

const Chef = require('./models/chef'); 


app.get('/chefs', async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (err) {
    console.error('Error fetching chefs:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/chefs', async (req, res) => {
  try {
    const newChef = new Chef(req.body);
    const savedChef = await newChef.save();
    res.status(201).json(savedChef); 
  } catch (err) {
    console.error('Error saving chef:', err);
    res.status(400).json({ error: 'Bad Request' }); 
  }
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
