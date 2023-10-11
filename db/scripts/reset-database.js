import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS recipes CASCADE;
      DROP TABLE IF EXISTS proteins CASCADE;
      DROP TABLE IF EXISTS carbs CASCADE;
      DROP TABLE IF EXISTS links CASCADE;
    `);

    // Create the proteins table
    await pool.query(`
      CREATE TABLE proteins (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        protein VARCHAR(500) NOT NULL,
        protein_type VARCHAR(500) NOT NULL
      );
    `);

    // Create the carbs table
    await pool.query(`
      CREATE TABLE carbs (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        carb VARCHAR(500) NOT NULL,
        carb_type VARCHAR(500) NOT NULL
      );
    `);

    // Create the links table
    await pool.query(`
      CREATE TABLE links (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        url VARCHAR(500) NOT NULL
      );
    `);

    // Create the recipes table with foreign keys to all other tables
    await pool.query(`
        CREATE TABLE recipes (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          name VARCHAR(500) NOT NULL,
          time VARCHAR(500) NOT NULL,
          protein_type INT REFERENCES proteins(id),
          carbs_type INT REFERENCES carbs(id),
          recipe_link INT REFERENCES links(id)
        );
      `);

    // Seed the proteins table
    await pool.query(`
      INSERT INTO proteins (protein, protein_type)
      VALUES 
        ('Beef', 'Mince'),
        ('Chicken', 'Thigh'),
        ('Pork', 'Sausage'),
        ('Beef', 'Steak');
    `);

    // Seed the carbs table
    await pool.query(`
      INSERT INTO carbs (carb, carb_type)
      VALUES 
        ('Potato', 'Fries'),
        ('Pasta', 'Spaghetti'),
        ('Rice', 'Rice'),
        ('Pastry', 'Puff Pastry');
    `);
    // Seed the links table
    await pool.query(`
        INSERT INTO links (url)
        VALUES 
          ('https://www.bbcgoodfood.com/recipes/best-spaghetti-bolognese-recipe'),
          ('https://www.bbcgoodfood.com/recipes/pan-fried-ribeye-steak'),
          ('https://www.bbcgoodfood.com/recipes/super-sausage-rolls'),
          ('https://www.bbcgoodfood.com/recipes/jerk-chicken-rice-peas');
    `);

    // Seed the recipes table
    await pool.query(`
        INSERT INTO recipes (name, time, protein_type, carbs_type, recipe_link)
        VALUES 
          ('Spaghetti Bolognese', 'Medium', 1, 2, 1),
          ('Steak and Fries', 'Quick', 4, 1, 2),
          ('Sausage Roll', 'Medium', 3, 4, 3),
          ('Jerk Chicken, Rice and Peas', 'Long', 2, 3, 4);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
