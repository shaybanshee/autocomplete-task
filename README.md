Hello!

If you are here that means you're looking to use this Autocomplete component I've iterated upon.

My Process:

My journey into Front-End is still fairly new(I was living in Rails and C# before this!); so I worked with tutorials and some support from fellow mentors
in my refactoring process. 

1. I initially built a hardcoded data set, utilizing the state and implementing the onClick, hover functionality on the list. 
2. I then included the JSONPUtil file to call the college data set from the sample html file given. 
3. At this point I worked with a senior engineer and mentor to refactor and create the handler function for the key commands
   to scroll through the list. 
4. After IDing the keys using the JS console, I was able to update the state with each handleKeyPress instance. 
5. To keep each portion component based and accessible; the tree structure divorces the "Autocomplete Component" from the 
   JSONquery.
6. I styled 1 instance and collapsed my CSS files into 1 file. By switching out the CSS file import in the .js files, no
   changes to the root index is required. 
7. I am currently battling the beginnings of a sinus infection. So I'm going to try to deliver this next file in my last 
   commit. I'm just being honest with my limitations, as life happens, even when you're trying to progress your career. 
8. Second .CSS style added. just edit the import on AutocompleteText.js to './Style2/AutocompleteText.css' 
9. Thanks!

















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
