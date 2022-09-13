use hospital

db.patient.insertOne({
 firstName: "Max",
 lastName: "Unknown",
 age: 10,
 history: [
  {disease: "cold", treatment: "nothing"},
  {disease: "flu1", treatment: "not going out"},
  {disease: "flu2", treatment: "not going out"},

  {disease: "flu4", treatment: "not going out"},

 ]
})


db.patient.insertMany([{
 firstName: "Susana",
 lastName: "Oria",
 age: 100,
 history: [
  {disease: "flu", treatment: "not going out"},
  {disease: "flu1", treatment: "not going out"},
  {disease: "flu2", treatment: "not going out"},
  {disease: "flu3", treatment: "not going out"},

 ]
},
{
 firstName: "luis",
 lastName: "Ruiz",
 age: 30,
 history: [
  {disease: "cold", treatment: "nothing"},
 ]
}
])

// Update

db.patient.updateOne({firstName: "luis"}, {$set: {age: 15, history: [
 {disease: "cold", treatment: "nothing"},
 {disease: "cold1", treatment: "nothing"},
 {disease: "cold2", treatment: "nothing"},
 {disease: "cold3", treatment: "nothing"},
 {disease: "cold4", treatment: "nothing"},
 {disease: "cold5", treatment: "nothing"},

]}})



db.patient.find({age: {$gt: 50}})


db.patient.deleteMany({history:{$elemMatch: {disease: "cold"}} })
db.patient.deleteMany({"history.disease": "cold" })
