// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.mjs";

export async function getRecipesTags() {
  // Query the database and return all Tags

  // Define the SQL query to fetch all tags from the 'tags' table
  const queryText = "SELECT * FROM recipes_tags";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getRecipesByTagId(id) {
  // Query the database and return the tag with a matching id or null
  if (!Array.isArray(id.searchArray) || id.searchArray.length === 0) {
    throw new Error(`Invalid input for tagIds. Input expected in the following format: {
      "searchArray": ["tagName","tagName"]
    }`);
  }
  // Define the SQL query to fetch the recipes with the specified tags from the 'recipes_tags' table
  const queryText = `
    SELECT recipes_tags.recipes, COUNT(recipes_tags.tags) AS tag_count 
    FROM recipes_tags 
    JOIN tags ON recipes_tags.tags = tags.id
    WHERE tags.name = ANY($1) 
    GROUP BY recipes_tags.recipes 
    ORDER BY tag_count DESC;
    `;

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id.searchArray]);

  // The rows property of the result object contains the retrieved records
  return result.rows || null;
}

export async function getTagsByRecipeId(id) {
  // Query the database and return the tag with a matching id or null

  // Define the SQL query to fetch the tagids matching the specfied recipe id from the 'recipe_tags' table
  const queryText = `
  SELECT * FROM recipes_tags 
  WHERE recipes = $1;`;

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows || null;
}

export async function createRecipesTag(tag) {
  // Query the database to create an tag and return the newly created tag

  // Define the SQL query for inserting a new tag into the 'tags' table
  const queryText = `
        INSERT INTO recipes_tags (recipes, tags)
        VALUES ($1, $2)
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [tag.recipes, tag.tags]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function deleteRecipeTagByRecipeId(tag) {
  // Query the database to delete an tag and return the deleted tag or null

  // Define the SQL query for deleting the specified tag from the 'tags' table
  const queryText = `
        DELETE FROM recipes_tags
        WHERE recipes = $1 AND tags = $2
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [tag.recipeid, tag.tagid]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
