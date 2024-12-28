## Book API

This project is an Express.js-based RESTful API for managing a collection of books. It provides endpoints to create, read, update, and delete books, with validation using JSON Schema.

## Features

- `GET /`
Retrieves a list of all books.
 
- ``Get /:id`
Retrieves the details of a specific book by its ID.
 
- `POST /`
Adds a new book to the collection.
Request body should follow the bookSchemaNew validation rules.

- `PUT /:isbn `
Updates an existing book by its ISBN.
Request body should follow the bookSchemaUpdate validation rules.

- `DELETE /:isbn`
Deletes a book by its ISBN.

## Project Structure
- routes/
Contains the route handlers (e.g., books.js for managing book-related endpoints).
- models/
Contains the Book model for interacting with the database.
- schemas/
JSON Schema files (bookSchema, bookSchemaUpdate) for validating book data.

## Validation
This API uses the jsonschema library for validating incoming request bodies:

- bookSchemaNew: Defines the structure of new book data.
- bookSchemaUpdate: Defines the structure of updated book data. Note that the isbn field cannot be modified.

## Error Handling
- If the validation fails, the API returns a 400 status code with a list of validation errors.
- If an invalid or non-existent book ID/ISBN is provided, a relevant error message is returned.