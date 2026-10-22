const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://soyabin458_db_user:Forget123@cluster0.fpxnqfo.mongodb.net/';

// Extended Schema (Task 1 + Portfolio Activity)
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number,
    city: String // Extended field for Portfolio Task
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);

// Task 1: Insert one document
async function insertOne() {
    const doc1 = new Person({
        name: 'Sabin Prasai',
        age: 19,
        gender: 'Male',
        salary: 50000,
        city: 'London'
    });
    const savedDoc = await doc1.save();
    console.log('One document inserted');
    console.log(savedDoc);
}

// Task 2: Insert many documents
async function insertMany() {
    const manypersons = [
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456, city: 'Manchester' },
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000, city: 'London' },
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402, city: 'Birmingham' },
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519, city: 'London' }
    ];
    const result = await Person.insertMany(manypersons);
    console.log('Many documents inserted');
    console.log(result);
}

// Task 3: Find all documents
async function findAll() {
    const docs = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age city')
        .limit(100);
    console.log("Showing multiple documents:");
    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary, doc.city || '');
    });
}

// Task 4: Find females with age >= 30
async function findFemalesOver30() {
    const givenAge = 30;
    const docs = await Person.find({
        gender: 'Female',
        age: { $gte: givenAge }
    })
        .sort({ salary: 1 })
        .select('name salary age')
        .limit(10);

    console.log(`Females aged ${givenAge} or above:`);
    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
}

// Task 5: Count all documents
async function countDocuments() {
    const count = await Person.countDocuments();
    console.log("Total Documents Count:", count);
}

// Task 6: Delete documents where age >= 45
async function deleteManyPersons() {
    const result = await Person.deleteMany({
        age: { $gte: 45 }
    });
    console.log("Deleted documents:", result);
}

// Task 7: Update all females' salary to 5555
async function updateManyPersons() {
    const result = await Person.updateMany(
        { gender: "Female" },
        { salary: 5555 }
    );
    console.log("Update successful");
    console.log(result);
}

// Portfolio Task: Query by City
async function findPeopleByCity(targetCity) {
    const docs = await Person.find({ city: targetCity });
    console.log(`People living in ${targetCity}:`);
    docs.forEach(doc => {
        console.log(`Name: ${doc.name}, City: ${doc.city}`);
    });
}

// Main execution function
async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to ${MONGO_URI}`);

        await insertOne();
        await insertMany();
        await findAll();
        await findFemalesOver30();
        await countDocuments();
        await deleteManyPersons();
        await updateManyPersons();
        await findPeopleByCity('London');

    } catch (err) {
        console.error('Error:', err);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}

main();