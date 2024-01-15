// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getProteins() {
  // Query the database and return all Proteins

  // Define the SQL query to fetch all proteins from the 'proteins' table
  const queryText = "SELECT * FROM proteins";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getProteinById(id) {
  // Query the database and return the protein with a matching id or null

  // Define the SQL query to fetch the protein with the specified id from the 'proteins' table
  const queryText = "SELECT * FROM proteins WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createProtein(protein) {
  // Query the database to create an protein and return the newly created protein

  // Define the SQL query for inserting a new protein into the 'proteins' table
  const queryText = `
        INSERT INTO proteins (protein, protein_type)
        VALUES ($1, $2)
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    protein.protein,
    protein.protein_type,
  ]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateProteinById(id, updates) {
  // Define the SQL query for updating the specified protein in the 'proteins' table
  const queryText = `
        UPDATE proteins
        SET protein = COALESCE($1, protein), protein_type = COALESCE($2, protein_type)
        WHERE id = $3
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    updates.protein,
    updates.protein_type,
    id,
  ]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteProteinById(id) {
  // Query the database to delete an protein and return the deleted protein or null

  // Define the SQL query for deleting the specified protein from the 'proteins' table
  const queryText = `
        DELETE FROM proteins
        WHERE id = $1
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
