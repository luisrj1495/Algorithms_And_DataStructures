const cursor = db.movies.find();
cursor.count(); // Always count from the find function
cursor.hasNext();
cursor.next();

