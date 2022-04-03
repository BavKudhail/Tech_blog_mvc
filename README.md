# 14 Model-View-Controller (MVC): Tech Blog

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://techtab-blog.herokuapp.com/)

![Tech Blog (1)](https://user-images.githubusercontent.com/93915846/161428678-67c9abae-0949-4aac-aa35-6cc0efe6e986.gif)

![Tech Blog (2)](https://user-images.githubusercontent.com/93915846/161428840-84071939-dd3a-4c10-a03b-1e2b253ff704.gif)



## The Goal

Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in ✅

WHEN I click on the homepage option
THEN I am taken to the homepage ✅

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in ✅

WHEN I choose to sign up
THEN I am prompted to create a username and password  ✅

<!-- @TODO - SAVED BUT NOT LOGGED IN -->
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site  ✅

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out  ✅

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created  ✅

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment  ✅


WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created ✅


WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post ✅


WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post ✅


WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post ✅


WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard ✅


WHEN I click on the logout option in the navigation
THEN I am signed out of the site ✅
```

  ## Table of Contents
  * [Technologies Used](#technologies-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)



  ## Technologies Used
  * Javascript
  * Express.JS
  * Node.JS
  * TailwindCSS
  * Handlebars
  * Express-Session
  * B-Crypt
  * MySQL
  * Sequelize



  ## Installation 
  
  1. Clone the repository
   ```
   https://github.com/BavKudhail/tech_blog_mvc.git
  ```
  2. Change the working directory
  ```
  cd tech_blog_mvc
  ```
  4. Install dependencies
   ```
  npm i
  ```
  6. Run the app
  ```
  node server.js
  ```

 
  ## Usage 
  ```
  To use the blog run the app and follow the prompts on screen.
  ```
  
  
  
  ## Screenshot
  ![terminal screenshot](https://raw.githubusercontent.com/BavKudhail/Read-Me-Generator/main/assets/images/screenshot.JPG)
  
  
  ## Deployment
  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://techtab-blog.herokuapp.com/)


  ## Contributing
  There are no guidelines for contributing at this time.


  ## Tests
  There is no test information for this application at this time.


  ## License
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  
  This application is covered under the MIT License. For further information click: 
  https://opensource.org/licenses/MIT
  
  
  ## Questions
  If you have any questions about this project please feel free to email me @ bavkudhail@gmail.com. You can also view more of my projects here https://www.github.com/bavkudhail


  📧 
  ### Email
  bavkudhail@gmail.com

