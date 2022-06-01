# <center>Git Commands</center>

## Download Git

It's better to use the version of 2.28.0.

链接：https://pan.baidu.com/s/1RK39krkZxn60yUgak-KT_g?pwd=c1gy 
提取码：c1gy

## Configure globally for the first time

1. Create a file named `myCode`.

2. Add right to click `Git Bash Here`.

3. Configure username and email.

   `git config --global user.name 'yourname'`

   `git config --global user.email 'youremail.com'`

4. Check the info you configured

   `git config --list`

5. Add SSH key so you don't need to input passwords next time. You'll find a folder named `.ssh` in your C:\User, and there will be two documents. You should copy the content of the one named `id_rsa.pub`. This is the SSH key.

​		`ssh-keygen -t rsa -C 'youremail.com'`

6. Open GitHub-Settings-SSH and GPG Keys-New SSH key, and they paste the SSH key there. Return to the Git Bash window, and input command as below.

   `ssh -T git@github.com`

## Use git

### Initialization

`git init`

### Optional: configure userinfo for this folder

`git config user.name 'yourname'`

``git config user.email 'youremail.com'`

### Git in local

#### 1. 提交到暂存区

`git add ./url`

`git add ./`

#### 2. 添加说明

`git commit -m 'description'`

#### 1和2合并简写

`git commit -am 'description'`

#### 3. Check if documents have been changed

`git status`

`git status -s`

#### 4. Check history

`git log`

`git log --oneline`

#### 5. Check all history

This commands will show versionID.

`git reflog`

#### 6. Reset version

This version is zero, the last one is `1`.

`git reset Head~1` or `git reset versionID`

`git checkout ./`

#### 7. Branch

- check if there are any branch `git branch`
- create branch (you need to be on the master) `git branch branchName`
- switch into this branch `git checkout branchName`
- merge branch (you need to be on the master) `git merge branchName `
- delete branch(not do this) `git branch -d branchName`

### Git remote

1. create a repository in GitHub.

2. connect this rep and add a name origin to it. `git remote add origin url `

3. you can **clone** this rep if you don't have it locally `git clone url`

4. **push** the local content to the rep:

   - to the master: `git push origin master`
   - *or to the branch(**recommended**):* `git push origin branchName`

5. You need to input the passwords of GitHub in the first time.(SSH key)

6. when to use **pull**? 

   ***Before push*** you should pull firstly to make the rep merge with your local content. So that your local content will be the newest.

    1. `git pull origin master`
    2. `git push origin master`

   So you'd better to tell your colleagues not to revise the rep during you push.

