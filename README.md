# Road Tripper - Server 
Road Tripper is a travel blog tailored to road trippers. It includes a map to outline the progress of the travellers, a gallery, and a post page. The site admins are able to grant access to users to also view 'family/friends only' content. It makes use of SQL to 

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
* A cloudinary name, key, and secret credentials can be obtained for free, please refer to the [Developer get started guide](https://cloudinary.com/documentation/how_to_integrate_cloudinary) for more detail. 
* The DB_LOCAL fields are related to your SQL password and username. The database name should match what you named the database in set up step 3 above.
* The port can be changed to your preference, is it defaulted to 8080 here.
* The JSON secret key can be any key you wish, however it is recommended to use a uuid generator or similar to obtain a complex key. 

## API Endpoints
### Get



## Technologies Used
### [NodeJs](https://nodejs.org/en/)
### [Express](https://expressjs.com/)
### [JSON Web Token](https://jwt.io/)
### [Knex.js](https://knexjs.org/)
### [MySQL](https://www.mysql.com/)
### [Cloudinary](https://cloudinary.com/)
<!-- ###Framework: React
###API's: Cloudinary, Google Maps
###Librarys: -->