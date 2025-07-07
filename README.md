# 🌟 Let's Learn Node.js!

Welcome! This repo contains exercises to help you learn **Node.js** by writing and running JavaScript in your terminal.

---

## 🚀 Getting Started

Follow these steps to set up the project on your local computer.

---

### 1. Fork this repository into your Github account

Click the **Fork** button (top right of this page) to create a copy of this repo under your own GitHub account.

![Fork Button on this Github repo](https://github.com/user-attachments/assets/91aefc0e-e416-4392-9b8b-31fffafdff0e)

---

### 2. Clone your fork into your computer

1. Copy the link to your forked repo by clicking on the green Code button on this page

    ![image](https://github.com/user-attachments/assets/01f8f297-b1e3-47b9-8947-9c806e0b6db7)


2. Open your Terminal
3. `cd` into your `Documents` folder in your computer
4. `cd` into your `dev` folder
5. Run this command, replacing the link with _your_ forked repo's link

    ```bash
    git clone https://github.com/YOUR-USERNAME/YOUR-FORK.git
    ````

---
   
### 3. Get Ready to Code in VS Code
  1. Open your newly cloned `nodejs-workbook` repo in VS Code. There are many ways to do this, using the Finder, the Terminal, or opening directly in VS Code. Use the way is easiest for you.
  2. Once your project is open in VS Code, open the Terminal in VS Code. 

---

### 4. Set Up Git Remotes 
1. **Check Your Current Remote**

    In the Terminal, run the following command: 
    ```
    git remote -v
    ```
    This command lists the current configured remote repository for your fork.
    You should see output that looks like roughly this:
    ```
    origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
    ```
    The terminal output should tell you that `origin` points to your own repo in _your_ Github account.
   
2. **Add the AnnieCannons repo as a new `upstream` remote**
   
     Next, we will specify a new remote `upstream` repository that will be synced with the fork. Run this command:

     ```
     git remote add upstream https://github.com/AnnieCannons/nodejs-workbook.git
     ```

    This will help you stay up to date with the latest changes from the original repo.

3. **Verify `origin` and `upstream` remotes**
   
    Run `git remote -v` again to verify the new upstream repository you've specified for your fork.
    
    You should see output that looks roughly like this, where the `origin` points to your own repo in _your_ Github account, and the `upstream` points to the AnnieCannons repo. 
    ```
    origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
    upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
    upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
    ```

