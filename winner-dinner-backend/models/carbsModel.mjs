// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getCarbs() {
  // Query the database and return all Carbs

  // Define the SQL query to fetch all carbs from the 'carbs' table
  const queryText = "SELECT * FROM carbs";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getCarbById(id) {
  // Query the database and return the carb with a matching id or null

  // Define the SQL query to fetch the carb with the specified id from the 'carbs' table
  const queryText = "SELECT * FROM carbs WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createCarb(carb) {
  // Query the database to create an carb and return the newly created carb

  // Define the SQL query for inserting a new carb into the 'carbs' table
  const queryText = `
        INSERT INTO carbs (carb, carb_type)
        VALUES ($1, $2)
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [carb.carb, carb.carb_type]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateCarbById(id, updates) {
  // Define the SQL query for updating the specified carb in the 'carbs' table
  const queryText = `
        UPDATE carbs
        SET carb = COALESCE($1, carb), carb_type = COALESCE($2, carb_type)
        WHERE id = $3
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    updates.carb,
    updates.carb_type,
    id,
  ]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteCarbById(id) {
  // Query the database to delete an carb and return the deleted carb or null

  // Define the SQL query for deleting the specified carb from the 'carbs' table
  const queryText = `
        DELETE FROM carbs
        WHERE id = $1
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
