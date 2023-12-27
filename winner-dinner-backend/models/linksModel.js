// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getLinks() {
  // Query the database and return all Links

  // Define the SQL query to fetch all links from the 'links' table
  const queryText = "SELECT * FROM links";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getLinkById(id) {
  // Query the database and return the link with a matching id or null

  // Define the SQL query to fetch the link with the specified id from the 'links' table
  const queryText = "SELECT * FROM links WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createLink(link) {
  // Query the database to create an link and return the newly created link

  // Define the SQL query for inserting a new link into the 'links' table
  const queryText = `
        INSERT INTO links (url)
        VALUES ($1)
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [link.link, link.link_type]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateLinkById(id, updates) {
  // Define the SQL query for updating the specified link in the 'links' table
  const queryText = `
        UPDATE links
        SET url = COALESCE($1, url)
        WHERE id = $2
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [updates.url, id]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteLinkById(id) {
  // Query the database to delete an link and return the deleted link or null

  // Define the SQL query for deleting the specified link from the 'links' table
  const queryText = `
        DELETE FROM links
        WHERE id = $1
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
