module.exports = {
  mutipleMongooseToObject: (mongoArrays) => {
    return mongoArrays.map((mongoArray) => mongoArray.toObject());
  },

  mongoToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
