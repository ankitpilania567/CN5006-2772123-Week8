const connectDB = require('./dbConnect.js');
const Person = require('./personModel.js');

connectDB();

const doc1 = new Person({ name: 'Mary', age: 70, Gender: "Female", Salary: 3456 });
doc1.save()
    .then((doc1) => {
        console.log("New Article Has been Added Into Your DataBase.", doc1);
    })
    .catch((err) => {
        console.error(err);
    });

manypersons = [{ name: 'Simon', age: 42, Gender: "Male", Salary: 3456 }
    , { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 }
    , { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
{ name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
]


Person.insertMany(manypersons).then(function () {
    console.log("Data inserted");
}).catch(function (error) {
    console.log(error);
}); 

Person.find()
    .limit(5)
    .then(docs => {
        console.log("First 5 documents:", docs);
    })
    .catch(err => {
        console.error("Error fetching documents:", err);
    });

Person.find({age: { $gt: 27 }})
    .sort({ Salary: 1 })
    .select("name Salary age")
    .limit(10)
    .exec()
    .then(docs => {
        console.log("Showing multiple documents");
        docs.forEach(doc => {
            console.log(`Name: ${doc.name}, Salary: ${doc.Salary}, Age: ${doc.age}`);
        });
    })
    .catch(err => {
        console.error("Error fetching documents:", err);
    });

var givenAge = 30;

Person.find({ Gender: "Female", age: { $gt: 27 } })
    .sort({ Salary: 1 })
    .select("name Salary age")
    .limit(10)
    .exec()
    .then(docs => {
        console.log("showingagegreaterthan15 ", givenAge);
        docs.forEach(function (Doc) {
            console.log(Doc.age, Doc.name);
        });
    })
    .catch(err => {
        console.error("Error fetching documents:", err);
    }); 

Person.countDocuments().exec()
    .then(count => {
        console.log("Total documents Count :", count)
    }).catch(err => {
        console.error(err)
    })

Person.deleteMany({ age: { $gte: 25 } })
    .exec()
    .then(docs => {
        console.log('deleted documents are:', docs);
    }).catch(function (error) {
        console.log(error);
    });

Person.updateMany({ Gender: "Female" }, { Salay: 5555 })
    .exec()
    .then(docs => {
        console.log("update")
        console.log(docs);
    }).catch(function (error) {
        console.log(error);
    });