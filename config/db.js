const { default: mongoose } = require('mongoose')
require('../models/adModel')
require('../models/authModel')

const connection = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://vaibhav:vaibhav@cluster0.3tnohjh.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    })

    if (connection) {
      console.log('db connected')
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = connection
