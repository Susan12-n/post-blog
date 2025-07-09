const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require('../models/categories'); 


dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const categories = [
  { name: "Technology" },
  { name: "Health" },
  { name: "Lifestyle" },
  { name: "Travel" },
  { name: "Education" },
];

const seedCategories = async () => {
  try {
    await Category.deleteMany(); // optional: clear old ones
    const inserted = await Category.insertMany(categories);
    console.log("Categories seeded:", inserted);
    process.exit();
  } catch (err) {
    console.error(" Error seeding categories:", err);
    process.exit(1);
  }
};

seedCategories();
