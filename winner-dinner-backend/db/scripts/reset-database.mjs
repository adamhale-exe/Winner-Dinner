import { pool } from "../index.mjs";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS recipes CASCADE;
      DROP TABLE IF EXISTS proteins CASCADE;
      DROP TABLE IF EXISTS carbs CASCADE;
      DROP TABLE IF EXISTS links CASCADE;
      DROP TABLE IF EXISTS tags CASCADE;
      DROP TABLE IF EXISTS recipes_tags CASCADE;
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
    await pool.query(`
      CREATE TABLE tags (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(500) NOT NULL
      );
    `);

    await pool.query(`
        CREATE TABLE recipes_tags (
        recipes INT REFERENCES recipes(id),
        tags INT REFERENCES tags(id)
        );
    `);

    // Seed the proteins table
    await pool.query(`
      INSERT INTO proteins (protein, protein_type)
      VALUES 
        ('Beef', 'Mince'),
        ('Chicken', 'Thigh'),
        ('Pork', 'Sausage'),
        ('Beef', 'Steak'),
        ('Beef', 'Stewing Beef'),
        ('Chicken', 'Breast');
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
          ('https://www.bbcgoodfood.com/recipes/jerk-chicken-rice-peas'),
          ('https://www.bbcgoodfood.com/recipes/mexican-beef-chilli'),
          ('https://www.bbcgoodfood.com/recipes/chinese-chicken-curry');
    `);

    // Seed the recipes table
    await pool.query(`
        INSERT INTO recipes (name, time, protein_type, carbs_type, recipe_link)
        VALUES 
          ('Spaghetti Bolognese', 'Medium', 1, 2, 1),
          ('Steak and Fries', 'Quick', 4, 1, 2),
          ('Sausage Roll', 'Medium', 3, 4, 3),
          ('Jerk Chicken, Rice and Peas', 'Long', 2, 3, 4),
          ('Mexican beef chilli', 'Long', 5, NULL, 5),
          ('Chinese chicken curry', 'Medium', 6, 3, 6 );
    `);

    // Seed the tags table
    await pool.query(`
    INSERT INTO tags (name)
    VALUES 
      ('Italian'),
      ('Chinese'),
      ('Spicy'),
      ('Mexican'),
      ('Chips'),
      ('Quick'),
      ('Cheesy'),
      ('Pastry');
    `);

    // Seed the recipes_tags table
    await pool.query(`
    INSERT INTO recipes_tags (recipes,tags)
    VALUES 
      (1,1),
      (5,4),
      (2,5),
      (4,3),
      (3,8),
      (2,6),
      (5,3),
      (6,2);
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
