# Road Tripper - Server 
Road Tripper is a travel blog tailored to road trippers. It includes a map to outline the progress of the travellers, a gallery, and a post page. The site admins are able to grant access to users to also view 'family/friends only' content. 

## Related
Here is the front-end for this project:

[Road Tripper Front End](https://github.com/erit27/road-tripper-frontend)



## Set Up
1. Git Clone repository to your local machine. 
2. Install required dependencies: 
``` npm install ```
3. Initialize the database in terminal:
``` 
 mysql -u root -p
 // enter your password //
 CREATE DATABASE roadtripper;
 USE roadtripper;
 // exit out of mysql terminal //

 npx knex migrate:latest
 npx knex seed: run
```
4. To start the server: 
``` npm run dev ```

## Environment Variables
A .env.sample has been provided, but you will need to create your own .env file with the appropriate fields: 
* A cloudinary name, key, and secret credentials can be obtained for free, please refer to the [Cloudinary developer get started guide](https://cloudinary.com/documentation/how_to_integrate_cloudinary) for more detail. 
* The DB_LOCAL fields are related to your SQL password and username. The database name should match what you named the database in set up step 3 above.
* The port can be changed to your preference, is it defaulted to 8080 here.
* The JSON secret key can be any key you wish, however it is recommended to use a uuid generator or similar to obtain a more secure key. 

## API Routes
**POST /createaccount**
* Request must include username, first name, last name, password
* Returns a json object with the new user information.

**POST /login**
* Request must include username, password
* If successful, returns a login success message and a JWT token signed and including the user id, username, user access, first name, and last name. 

**GET /locations**
* Checks if a JWT token has been provided. If the user provides a JWT token with a "public" access field, or no JWT token, the request returns the public locations in JSON format. If the user provides a token with "admin" or "family" access in the payload, the private locations are returned.

**GET /posts/postinfo**
* Returns a json object containing all posts title, id, authors first and last name, creation timestamp, hero photo URL 

**GET /posts/:postId**
* Returns a json object containing information for a single post. Checks the JWT tokens access and returns private content as well if the access field is "family" or "admin".  

**DELETE /posts/:postId** 
* Deletes post matching the post ID

**POST /posts/new**
* Creates a new post. Checks that the incoming request includes the required fields. 

**GET /users/**
* Gets the user data, including id, first name, last name, access, and username. 

**PUT /users/updatepermissions**
* Takes a list of user IDs and updates those users permissions to match the incoming request. 

**GET /photos**
* Accesses cloudinary to get a list of photos from the cloud.

## Technologies Used
#### [NodeJs](https://nodejs.org/en/)
#### [Express](https://expressjs.com/)
#### [JSON Web Token](https://jwt.io/)
#### [Knex.js](https://knexjs.org/)
#### [MySQL](https://www.mysql.com/)
#### [Cloudinary](https://cloudinary.com/)
#### [Axios](https://axios-http.com/)