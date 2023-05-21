# Project Name: BED toys

This is a full-stack Toy Marketplace website. You are required to focus on a specific toy category and fretures is bellow.

## Fetures and fungtionality

- [Project Description](#project-description)
- [Live project link](#live-project-link)

## Project Description

- navbar and footer on all the pages except on the 404-page. Create a reasonable and meaningful footer. (including website logo, name, copyright, some contact information, social media links, address, etc.)
- Your website should have a navbar with the Website logo, Website name, Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture.
- On the Registration and Login pages, display relevant error messages when necessary. the registered user by name email password and photo url. and the login with google and email-password
- Banner section -A slider/banner/ a meaningful section. Gallery Section - Show relevant pictures.
  Shop by category- Implement a tab system for Shop by category section included by meterial ui tabs for react, or each containing sub-categories of the category is my chooseen. Each tab will have minimum 2 toys, and each toy will have the information.
- Create a Blog where you will have to answer the some questions
- Create an All Toys page where you will see the toys all the users have added in the tabular form. Each row of the All Toys table/list will have the some information
- Show 20 results by default by using limit
- After clicking on the View Details button, he/ she will be redirected to the Toys Details route ( /toy/:id ) containing the information ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
- Add A Toy page will be a private route and add toy by : Picture URL of the toy,
  Name,
  seller name (if available from the logged in user)
  seller email (info from the logged in user)
  Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
  Price,
  Rating,
  Available quantity
  Detail description
- My Toys page will be private routes: If a user logs in, they will see the My Toys page, which it will show all the toys information they have added from the Add A Toy page in a tabular form. Each row will have an update and delete button.
- For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message
- 404 page
- Reload: If you reload the protected/private routes (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.
- Make Home page of your website mobile & desktop responsive
- On the My Toys page, you must implement a sorting system to sort the toys in descending and ascending orders based on the price.
- Give your website name. The website title will be changed according to the route you are clicking. Suppose your website name is PHero. Then, on the ‘about’ route, your website title will be ‘PHero | About us’.

## Live project link

https://assignment-11-a242a.web.app/
