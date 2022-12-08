# Intro to Github

## Foxtrot's first github extravaganza!

# Git Process

- Created a repo 
- Cloned a repo --> there is a repo on Github and you need it locally
-   local --> your computer
-   remote --> github, the cloud...

- Make a file --> touch <new-file-name> mkae sure you have an extension
    - Make sure you are inside the repo --> cd <repo-name>
    - Naming conventions --> lowercase, no spaces
    - Extensions --> which type of file 

- Added content
- Added the PAT authentification (token)

- Local --> remote 
    - git status
    - git add .  (sidenote: you can do git add <file-name>)
    - git commit -m "message" --> like a patch note. Make it so others and your future self know what this commit actually did.
    - git push origin <branch-name>


    -----


- git checkout  -b (name)
- touch (file name) --> we're adding a file .md
- code .
- add some text to the file 
    - got status 
    - git add .
    - git commit -m "Name of File"
    - git push origin (name of branch)
    - git status

    ---------
- git branch
- git checkout main
- git fetch prigin (brnach name)
- git checkout (name of file?)
- git pull origin (name of file?)
- code .
- after you check it works
- git status
- git add .
- git commit -m "message"
- git push origin (name of file)




---------New notes
starting new challenge :
- git clone (Repo URL)
- git checkout -b (new branch name)
- touch (new file name)
-



push to cloud:
- git status
- git add Name of File 
- git status (shoukd be green)
- git commit -m "your message"
- git push origin branch name 


----------------------------
Assesment:
BEGINNING:
-copy repo from link
- ls
- cd (file name)
- file name: Week-(#)-assessment-(frist name)(last name)

DONE:
- git add . 
-git status (green)
- git commit -m
- git push origin (name of file)
- do not merge until you have been reviewed (on github)
- Once it is reviewed then you can merge
- Do not push to main

DELETE BRANCH
- git status
- git checkout main
- git pull origin main
- git branch 
- git branch -d (name of branch)
- git branch