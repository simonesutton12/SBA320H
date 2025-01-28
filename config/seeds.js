const moongose = require("mongoose");
const Meals = require("./meals");
const Plans = require("./plans");
const Users = require("./users");
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://KFIS4Uo7Pcp0NWUG6zBvN3vedJLFaKWp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "yourUsername",
  pass: "yourPassword",
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// Seed Data

const seedUsers = [
  {
    username: "user1",
    email: "user1@example.com",
    password: "password123",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: "password123",
  },
];

const seedMeals = [
  {
    name: "Breakfast Burrito",
    calories: 500,
    protein: 20,
    carbs: 60,
    fat: 25,
  },
  {
    name: "Chicken Salad",
    calories: 350,
    protein: 40,
    carbs: 20,
    fat: 15,
  },
  {
    name: "Vegetarian Stir Fry",
    calories: 400,
    protein: 15,
    carbs: 50,
    fat: 20,
  },
];

const seedPlans = [
  {
    name: "Weight Loss Plan",
    description: "A plan designed to help you lose weight.",
    meals: [
      { meal: seedMeals[0]._id, quantity: 2 },
      { meal: seedMeals[1]._id, quantity: 1 },
    ],
  },
  {
    name: "Muscle Gain Plan",
    description: "A plan designed to help you gain muscle.",
    meals: [
      { meal: seedMeals[1]._id, quantity: 2 },
      { meal: seedMeals[2]._id, quantity: 1 },
    ],
  },
];

await Users.deleteMany({});
await Meals.deleteMany({});
await Plans.deleteMany({});

await Users.insertMany(seedUsers);
await Meals.insertMany(seedMeals);
await Plans.insertMany(seedPlans);


console.log("Database seeded");
mongoose.connection.close();
