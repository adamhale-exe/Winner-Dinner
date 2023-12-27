// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getRecipes() {
  // Query the database and return all recipes

  // Define the SQL query to fetch all recipes from the 'recipes' table
  const queryText = "SELECT * FROM recipes";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getRecipeById(id) {
  // Query the database and return the recipe with a matching id or null

  // Define the SQL query to fetch the recipe with the specified id from the 'recipes' table
  const queryText = "SELECT * FROM recipes WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createRecipe(recipe) {
  // Query the database to create an recipe and return the newly created recipe

  // Define the SQL query for inserting a new recipe into the 'recipes' table
  const queryText = `
        INSERT INTO recipes (name, time, protein_type, carbs_type, recipe_link)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    recipe.name,
    recipe.time,
    recipe.protein_type,
    recipe.carbs_type,
    recipe.link,
  ]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateRecipeById(id, updates) {
  // Define the SQL query for updating the specified recipe in the 'recipes' table
  const queryText = `
        UPDATE recipes
        SET name = COALESCE($1, name), time = COALESCE($2, time), protein_type = COALESCE($3, protein_type), carbs_type = COALESCE($4, carbs_type), link = COALESCE($5, link)
        WHERE id = $6
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    updates.name,
    updates.time,
    updates.protein_type,
    updates.carbs_type,
    updates.link,
    id,
  ]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteRecipeById(id) {
  // Query the database to delete an recipe and return the deleted recipe or null

  // Define the SQL query for deleting the specified recipe from the 'recipes' table
  const queryText = `
        DELETE FROM recipes
        WHERE id = $1
        RETURNING *;
      `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
