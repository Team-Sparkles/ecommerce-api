------------
NOZAMA DOT COM - YOUR ONE-STOP E-COMMERCE DESTINATION
------------

Created by [@ELueder](https://github.com/elueder), [@MatthewJRamos](https://github.com/MatthewJRamos), [@SamPrimary](https://github.com/SamPrimary), [@TeriChadbourne](https://github.com/TeriChadbourne) :

Welcome to NOZAMA DOT COM, the future of e-commerce! Our site can be dynamically updated with a changing database of items for sale, and users can add as many of them as they want to their shopping cart, before checking out and processing a payment using Stripe.

Shoppers can view all the items on Nozama, then sign up and log into Nozama.com using their email, and immediately start their shopping experience. Once logged into Nozama, an order is started for them, and they can click on each item in the marketplace to add it to their shopping cart for that order. Additionally, users can change their password if necessary.

Shoppers can visit their shopping cart at any time and view what items they have added for purchase. Once there, they can remove any items they have changed their mind on purchasing and see the updated total. They can then checkout to the integrated Stripe purchasing software. Once they have completed their order, they can return to Nozama to continue shopping.

All users have a purchase history that they can pull up at any time, showing them the details of all their past purchases on Nozama.

We here at Nozama can add any new items at any time, and any user opening the site can then see the new items for sale.

------------
SITE
------------

Deployed frontend client:
https://team-sparkles.github.io/ecommerce-client/

Frontend client repository:
https://github.com/Team-Sparkles/ecommerce-client

Deployed backend API:
https://immense-caverns-65324.herokuapp.com/

Backend API repository:
https://github.com/Team-Sparkles/ecommerce-api

------------
USER STORIES
------------

Mary is a new user to Nozama, and will want to view all products (name, price per unit) whether or not she is logged in.

Mary will want to create an account using her email, and then immediately be able to start purchasing once she logs in.

Jonathan is a long-time shopper in Nozama. He wants to be able to sign in at any time using his existing account.

Jonathan is very concerned with identity security and wants to be able to change his password.

Nora will want to add products one at a time to her shopping cart, once signed in, and look at her shopping cart to see the current total.

Nora will want to delete products from their cart while budgeting her total purchase.

Mary will want to checkout with items currently in her cart and process their active payment.

Jonathan will want to review past orders and ensure he purchased what he expected.

------------
ERD
------------

https://docs.google.com/spreadsheets/d/1SvasDIhXXWnwVsdPp9oy_cZU8mPNQBPgxY6GD2Vepd4/edit#gid=657849471

------------
ROUTES
------------
User:
POST /sign-up
POST /sign-in
PATCH /change-password
DELETE /sign-out


Item:
GET /items
GET /items/:id

Order:
POST /orders
PATCH /orders//:id
GET /orders
GET /orders/:id

Charge:
POST /charge

------------
TECHNOLOGIES USED
------------

Technologies Used for Client:
- JavaScript
- jQuery
- Handlebars
- Stripe
- HTML
- CSS
- Sass

Technologies Used for API:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe

------------
NEXT STEPS
------------

Nozama.com's current implementation has room for improvement!

- Nozama's orders can be arranged by date.

- Nozama's visual experience can welcome users by name.

- Nozama's item database can be improved to create hosted image URLs, to allow each item feature tile to possess a related linked image, so now all items for sale will have an image attached.

- Nozama can feature a search bar that will allow users to search for items using tags or related words.

- Nozama can have item sections or let users filter visibility by tags.

------------
PROCESS
------------

Development was arranged using the following structure:

- Each member of the team picked a specialty and would apply the bulk of their troubleshooting time to that specialty, while also working alongside all other team members.

- Github was used for version control and team members reviewed each pull request to ensure that merge conflicts didn't disrupt development time.

- Github's issue queue was used to manage an active list of issues to tackle, arranged by their priority as project requirements.

- Development timeline was structured in advance and team checked in daily for standup reports, emulating a 'sprint' for our limited development time.
