<<<<<<< HEAD
# Namaste React Readme Notes #
=======
# namaste-react-repo
Repository for Namaste React course.
>>>>>>> d7c974780d3076a61e882ce8b1282be334cfa071

# Commonly used git commands
git --version
git init
git branch -M main
git add .
git commit -m "Episode-01"
git remote add origin:TERMINATOR-96/namaste-react-repo.git
git push origin main
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Merged remote and local branches"
git push oigin main
git checkout -b development-branch main
git branch

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm init

npx parcel index.html - just like npm, we have npx. npx means executing a package whereas npm is used to install the package. build a development build and host that build to localhost:1234.
# npx parcel index.html - executing an npm package which is parcel and giving the source file as "index.html".

npm install react - not a dev dependency just a normal dependency

npm install react-dom or npm i react-dom

npx parcel build index.html - builds fast, performance and optimized code of our project

"package.json is a configuration for npm(not node package manager)."

# Types of dependency
1. dev dependency (-D for development) eg. npm install -D parcel
2. normal dependency (for production)

# Difference between caret(^) and tilde(~)
1. caret(^)- if we use caret then in case of minor upgrade like from 2.8.3 to 2.8.4, parcel will upgrade automatically (recommended).
2. tilde(~)- if we use tilde then in case of major upgrade like from 2.8.3 to 3.0.0, parcel will upgrade automatically.
Note- Do not upgrade to major versions automatically since it may have major changes.

# package.json and package-lock.json
package-lock.json keeps the track of exact version installed in our system whereas package.json keeps upgrading the version.

# transitive dependency
our parcel is dependent on parcel which in turn is dependent on other packages. this is known as transitive dependencies.

# Note on cdn
cdn links are not the preferred way to bring React or ReactDOM into our project.

# Parcel
- Dev Build
- Hosting on Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - Removes unused code or not required functions from our code
- Different dev and prod bundles

# JSX
- Javascript syntax to create react elements.
- parcel is transpiling the jsx code before it is goes to the javascript engine and converts the jsx code.
- Transpiling means converting to the code which react can understand. Transpiling is done using Babel which is present in node modules.
- Babel is transpiler or javascript compiler.
- JSX - HTML-like or XML-Like syntax
- JSX => React.createElement => ReactElement-JS object => HTML Element
- above conversion is done by Parcel which is using Babel to do the same
- if writing in multiple lines use small brackets

# Components in React
- Class based components -> Old way of writing code
- Funtional components -> New way of writing code

# React Functional Components
- A function that returns a JSX in react is react functional component or a function that returns a react element.
