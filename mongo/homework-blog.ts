use blog

db.users.insertOne({
 name: "Luis",
})

db.posts.insertOne({
 title: "Learning MongoDB",
 creator: ObjectId("From user")
 comments: [
  {text: "Cool course", author: ObjectId("FROM USE")}
 ]
})