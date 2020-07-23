To start server locally:
  In the server folder:
    npm start
  In the client:
    npm start

Any new changes to code:
  git status              - to check if your folder is upto date
  git pull origin master  - if changes are done to git repo and not updated in local folder
  else make changes and add:
    git add .
    git commit -m "commit message"
    git push origin master

To push changes to heroku:
    heroku container:login 
    heroku container:push web
    heroku container:release web