/** Common config for bookstore. */


// let DB_URI = `postgresql://`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = `${DB_URI}/books-test`;
// } else {
//   DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
// }


let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "express_auth_test";
} else {
  DB_URI = "express_auth"
}

module.exports = { DB_URI };