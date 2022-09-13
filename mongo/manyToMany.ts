db.products.insertOne({
  title: "Book",
  price: 12.99,
});

db.customers.insertOne({
  name: "Max",
  age: 29,
});

db.orders.insertOne({
  productId: ObjectId("FROM_PRODUCT"),
  customerId: ObjectId("FROM CUSTOMER"),
});


// Another approach

db.customers.insertOne({
 orders: [
  {productId: ObjectId("FROM_PRODUCT"), quantity: 5}
 ]
})