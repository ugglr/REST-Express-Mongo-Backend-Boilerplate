# REST Express MongoDB Backend Boilerplate

## TECH STACK

- NODE
- EXPRESS
- MONGOOSE
- MONGODB

## HOW TO USE PROJECT

(NOTE ON MONGODB: I USE A LOCAL INSTALLATION OF MONGODB ON THE DEFAULT PORTS AND IF YOU DO THE SAME THE SERVER SHOULD CONNECT DIRECTLY. IF YOU ARE USING MONGO ATLAS OR ANOTHER CLOUD SOLUTION YOU'LL NEED TO GET THAT CONFIGURED. )

```
git clone "put-repo-https-link here"
```

Install dependencies

```
yarn
```

Start Server (runs: nodemon index.js)

```
yarn run start
```

If you are using Postman switch to raw + json

## Endpoints

USER:

- getting a user by email
  http://localhost:3000/api/user/getUserByEmail

GET: Request body (JSON)

```
{
    "email": "mail@mail.com"
}
```

- Register
  http://localhost:3000/api/user/register

POST: Request body (JSON)

```
{
    "email": "mail@mail.com",
    "password": "SecretPassword"
}
```

- Login
  http://localhost:3000/api/user/login

POST: Request body (JSON)

```
{
    "email": "mail@mail.com",
    "password": "SecretPassword"
}
```
