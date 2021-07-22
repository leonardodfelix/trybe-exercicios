# Git, GitHub e Internet

## Git

Install:
```
sudo apt install git
```

Config:
```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```
<hr>

## GitHub

`https://github.com/`

SSH:
```
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```
Default path `/home/you/.ssh/id_rsa`

SSH key to SSH-agent
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
> Add to GitHub. :smirk:

<hr>

Local Git Repository:
* `git init`
* `git clone [ssh url]`

Changes:
* `git add filename` ( **.** for all instead of filename)
* `git commit -m "Description of the changes"`
* Push
  * `git push origin main`
  * `git push -u origin main`
>>> *origin* - alias for remote url  
>>> *main* - name of local branch  
>>> *-u* - use if the local branch is **not** on the remote repository  

For the next pushes use `git push`

### Branches
`git branch` - shows branches  
`git branch name` - creates branch *name*  
`git branch -M name` - set main branch to *name*  
`git branch -D name` - deletes branch *name*  