# BE-cats

In this project, I create an Express server that works with MongoDB through mongoose. I connect my project when the server initializes. I define a data model of my choice, shelter cats.

The models is: 

```javascript
{
    name: { type: String, required: true },
    canBeAdoptedAlone: { type: Boolean, required: true },
    genre: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String },
    race: { type: String },
    dateOfBirth: { type: Date }
}
```
## Acceptance criteria:

- [x] The server starts on a local port when launching the npm run start command.
- [x] The server connects to a MongoAtlas database.
- [x] There is a GET endpoint that allows me to retrieve all documents of a collection type.
- [x] There is a GET endpoint that allows me to retrieve a single item by its id from a collection.
- [x] There is a POST endpoint that allows me to create a new item in the corresponding collection.
- [x] There is a PUT endpoint that allows me to edit an item by its id in a collection.
- [x] There is a DELETE endpoint that allows me to delete an item by its id in a collection.
