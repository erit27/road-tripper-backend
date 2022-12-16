# Road Tripper - Server 
Road Tripper is a travel blog tailored to road trippers. It includes a map to outline the progress of the travellers, a gallery, and a post page. The site admins are able to grant access to users to also view 'family/friends only' content. It makes use of SQL to 

## Related
Here is the front-end for this project:

[Road Tripper Front End](https://github.com/erit27/road-tripper-frontend)

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
4. ``` npm run dev ```