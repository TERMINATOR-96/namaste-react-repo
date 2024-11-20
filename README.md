<<<<<<< HEAD
# Namaste React Readme Notes #
=======
# namaste-react-repo
Repository for Namaste React course.
>>>>>>> d7c974780d3076a61e882ce8b1282be334cfa071


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

"package.json is a configuration for npm(not node package manager)."

There are two types of dependencies-
1. dev dependency (-D for development) eg. npm install -D parcel
2. normal dependency (for production)

In package.json-
1. caret(^)- if we use caret then in case of minor upgrade like from 2.8.3 to 2.8.4, parcel will upgrade automatically (recommended).
2. tilde(~)- if we use tilde then in case of major upgrade like from 2.8.3 to 3.0.0, parcel will upgrade automatically.
Note- Do not upgrade to major versions automatically since it may have major changes.

Difference between package.json and package-lock.json-
package-lock.json keeps the track of exact version installed in our system whereas package.json keeps upgrading the version.

what is transitive dependencies?
our parcel is dependent on parcel which in turn is dependent on other packages. this is known as transitive dependencies.

