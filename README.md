# StudentRegistrationAPI

# How to use the API using POSTMAN

## 1. Add a Student

Method: POST

URL: http://localhost:3000/std

Body:

Select raw

Choose JSON

Enter:


{
    "id": "1",
    "name": "John Doe",
    "age": 20
}
Click Send.


## 2. Edit a Student

Method: PUT

URL: http://localhost:3000/std/(id)

Body:

Select raw

Choose JSON

Enter:

{
    "name": "Jane Doe",
    "age": 21
}

Click Send.
Change (id) with preferred student's ID

## 3. Delete a Student

Method: DELETE
URL: http://localhost:3000/std/(id)
Click Send.
Change (id) with the preferred student's ID


## 4. View Student List

Method: GET
URL: http://localhost:3000/std
Click Send.
