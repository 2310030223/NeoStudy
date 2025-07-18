const mongoose = require('mongoose');
const Category = require('../models/category');
require('dotenv').config();

const categories = [
    {
        name: "Web Development",
        description: "Learn to build modern web applications using various technologies and frameworks"
    },
    {
        name: "Cloud Computing",
        description: "Master cloud platforms and services for scalable and efficient applications"
    },
    {
        name: "Programming",
        description: "Learn programming fundamentals and advanced concepts in various languages"
    },
    {
        name: "Data Science",
        description: "Explore data analysis, machine learning, and artificial intelligence"
    },
    {
        name: "Mobile Development",
        description: "Build applications for iOS and Android platforms"
    }
];

async function addCategories() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB');

        // Add categories
        for (const category of categories) {
            const existingCategory = await Category.findOne({ name: category.name });
            if (!existingCategory) {
                await Category.create(category);
                console.log(`Added category: ${category.name}`);
            } else {
                console.log(`Category already exists: ${category.name}`);
            }
        }

        console.log('All categories added successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error adding categories:', error);
        process.exit(1);
    }
}

addCategories(); 