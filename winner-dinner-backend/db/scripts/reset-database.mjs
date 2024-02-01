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
        ('Chicken', 'Breast'),
        ('None','None'),
        ('Salmon','Fillet'),
        ('Shrimp','Whole Shrimp'),
        ('Tofu','Tofu')
        ;
    `);

    // Seed the carbs table
    await pool.query(`
      INSERT INTO carbs (carb, carb_type)
      VALUES 
        ('Potato', 'Fries'),
        ('Pasta', 'Spaghetti'),
        ('Rice', 'White Rice'),
        ('Pastry', 'Puff Pastry'),
        ('None','None'),
        ('Quinoa','None'),
        ('Arborio Rice', 'Arborio Rice'),
        ('Sweet Potatoes','Sweet Potatoes'),
        ('Burger Buns','Burger Buns');
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
          ('https://www.bbcgoodfood.com/recipes/chinese-chicken-curry'),
          ('https://www.bbcgoodfood.com/recipes/healthy-pasta-primavera'),
          ('https://laughingspatula.com/baked-salmon-with-lemon-dill-sauce/'),
          ('https://www.bbcgoodfood.com/recipes/mushroom-risotto'),
          ('https://whatgreatgrandmaate.com/cajun-shrimp-sausage-skewers/'),
          ('https://www.onceuponachef.com/recipes/caprese-salad-balsamic-glaze.html'),
          ('https://thesavvyspoon.com/2022/01/03/30-minute-honey-mustard-glazed-chicken/'),
          ('https://www.bbcgoodfood.com/recipes/tofu-stir-fry'),
          ('https://www.themediterraneandish.com/greek-grilled-chicken-salad-recipe/'),
          ('https://www.bbcgoodfood.com/recipes/lentil-soup'),
          ('https://www.recipetineats.com/slow-cooker-bbq-pulled-pork-sandwich/'),
          ('https://www.eatingwell.com/recipe/260726/black-bean-quinoa-buddha-bowl/'),
          ('https://natashaskitchen.com/teriyaki-salmon-recipe/'),
          ('https://www.bbcgoodfood.com/recipes/butternut-squash-soup-chilli-creme-fraiche'),
          ('https://www.simplyrecipes.com/recipes/eggplant_parmesan/'),
          ('https://jessicainthekitchen.com/vegan-thai-red-curry-with-tofu/'),
          ('https://www.lecremedelacrumb.com/mango-salsa-chicken/'),
          ('https://feelgoodfoodie.net/recipe/spinach-feta-stuffed-chicken/'),
          ('https://www.thefieryvegetarian.com/chickpea-spinach-curry/'),
          ('https://thecheekychickpea.com/pesto-pasta-with-cherry-tomatoes/'),
          ('https://www.dinneratthezoo.com/beef-and-broccoli-stir-fry/');
          `);

    // Seed the recipes table
    await pool.query(`
        INSERT INTO recipes (name, time, protein_type, carbs_type, recipe_link)
        VALUES 
          ('Spaghetti Bolognese', 'Medium', 1, 2, 1),
          ('Steak and Fries', 'Quick', 4, 1, 2),
          ('Sausage Roll', 'Medium', 3, 4, 3),
          ('Jerk Chicken, Rice and Peas', 'Long', 2, 3, 4),
          ('Mexican beef chilli', 'Long', 5, 5, 5),
          ('Chinese chicken curry', 'Medium', 6, 3, 6 ),
          ('Vegetarian Pasta Primavera', 'Quick', 7, 2, 7),
          ('Salmon with Lemon Dill Sauce', 'Medium', 8, 6, 8),
          ('Mushroom Risotto', 'Medium', 7, 7, 9),
          ('Cajun Shrimp and Sausage Skewers', 'Quick', 9, 5, 10),
          ('Caprese Salad with Balsamic Glaze', 'Quick', 7, 5, 11),
          ('Honey Mustard Glazed Chicken', 'Medium', 6, 8, 12),
          ('Vegetable Stir-Fry with Tofu', 'Quick', 10, 3, 13),
          ('Greek Salad with Grilled Chicken', 'Quick', 6, 5, 14),
          ('Lentil Soup', 'Long', 7, 5, 15),
          ('BBQ Pulled Pork Sandwiches', 'Long', 3, 9, 16),
          ('Quinoa and Black Bean Bowl', 'Quick', 7, 6, 17),
          ('Teriyaki Glazed Salmon', 'Medium', 8, 3, 18),
          ('Butternut Squash Soup', 'Long', 7, 5, 19),
          ('Eggplant Parmesan', 'Medium', 7, 2, 20),
          ('Thai Red Curry with Tofu', 'Medium', 10, 3, 21),
          ('Mango Salsa Chicken', 'Quick', 6, 3, 22),
          ('Spinach and Feta Stuffed Chicken Breast', 'Medium', 6, 5, 23),
          ('Chickpea and Spinach Curry', 'Medium', 7, 3, 24),
          ('Pesto Pasta with Cherry Tomatoes', 'Quick', 7, 2, 25),
          ('Beef and Broccoli Stir-Fry', 'Quick', 5, 3, 26);
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
      ('Vegetarian');
    `);

    // Seed the recipes_tags table
    await pool.query(`
    INSERT INTO recipes_tags (recipes,tags)
    VALUES 
      (1,1),
      (5,4),
      (2,5),
      (4,3),
      (2,6),
      (5,3),
      (6,2),
      (7,1),
      (7,6),
      (7,8),
      (9,1),
      (9,8),
      (10,3),
      (10,6),
      (11,6),
      (11,8),
      (13,6),
      (13,8),
      (14,6),
      (15,6),
      (15,8),
      (17,6),
      (17,8),
      (19,6),
      (19,8),
      (20,1),
      (20,7),
      (20,8),
      (21,3),
      (21,8),
      (22,6),
      (22,4),
      (22,3),
      (24,3),
      (24,8),
      (25,6),
      (25,1),
      (25,8),
      (26,2),
      (26,6)
      ;
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
