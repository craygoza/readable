# Readable Project
To get started developing right away, clone this repository and install missing package,json missing dependencies using npm -i command.

# Backend Server 
Please clone backend server repository located on GitHub: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server,
go to the downloaded folder and execute: npm install and for run the backend server, using : node server command inside api-server folder, for more detail please
check the readme file: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md

#Project structure
```bash
install all project dependencies with npm install
start the development server with npm start
What You're Getting
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. Dependencies added to the project, react router and Regex were added.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # folder contains all actions components 
    ├── components # This folder contains all the jsx components 
        ├── Post.js # Represents a Post
        ├── PostList.js # Represents a list of posts
        ├── Comment.js # This component represents a comment in a post.
        ├── Post.js # This page contains the jsx and html elements to render the post page.
        ├── Score.js # This component represents upvoting and downvoting component
        ├── PostDetail.js # This page contains the jsx and html elements to render the post detail page.
        ├── AddCommentForm.js # This file contains a form to populate a comment
        ├── AddPostForm.js # This component renders a form to populate a post    
        ├── ResourceNotFound.js # This component renders a 404 Resource Not Found page.        
    ├── containers # This folder contains all components that bind components to redux store.
    ├── reducers # This folder contains all reducers.
    ├── util # This folder contains utility classes.
        ├── ReadableAPI.js # This component performs rest call to backend server.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.


