module.exports = {
  PORT: 5000,
  DB_URI: `mongodb+srv://dari:0sB6qJ2AzgCOEWJc@cluster0.xxdwy.mongodb.net/expenses?retryWrites=true&w=majority`,
  SAlT_ROUNDS: 10,
  SECRET: "JLKJFlkjlkjlJLKjlkjlkj",
  COOKIE_NAME: "token",
  ENGLISH_ALPHANUMERIC_PATTERN: /^[a-zA-Z0-9]+$/,
  USERNAME_LENGTH: 4,
  PASSWORD_LENGTH: 4,
  CATEGORIES: [
    { id: "advertising", name: "Advertising" },
    { id: "benefits", name: "Benefits" },
    { id: "car", name: "Car" },
    { id: "equipment", name: "Equipment" },
    { id: "fees", name: "Fees" },
    { id: "home-office", name: "Home Office" },
    { id: "insurance", name: "Insurance" },
    { id: "interest", name: "Interest" },
    { id: "labor", name: "Labor" },
    { id: "maintenance", name: "Maintenance" },
    { id: "materials", name: "Materials" },
    { id: "meals-and-entertainment", name: "Meals and Entertainment" },
    { id: "office-supplies", name: "Office Supplies" },
    { id: "other", name: "Other" },
    { id: "professional-services", name: "Professional Services" },
    { id: "rent", name: "Rent" },
    { id: "taxes", name: "Taxes" },
    { id: "travel", name: "Travel" },
    { id: "utilities", name: "Utilities" },
  ],
};
