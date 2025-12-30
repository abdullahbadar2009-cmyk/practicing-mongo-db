use("data")

db.createCollection("sigma")
db.sigma.insertOne({
    person:"abdullah",
    age:17
})

db.sigma.insertMany([
    {name:"andullah",age:18},
    {name:"badar",age:40},
])