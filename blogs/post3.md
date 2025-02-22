# 80:20 GitHub Guide

Welcome to the **80:20 GitHub Guide**, where I will walk you through the most essential 20% of GitHub features that we use most often. This guide is designed to be simple and straightforward—so easy that even a kid can understand.

Before we begin, let me be clear: I will **not** be explaining Git itself in this guide. Git is the version control system that powers GitHub, but if you're not familiar with it, I suggest searching for a beginner’s guide to Git first. Now, let's dive into GitHub!

---

## What is GitHub?
GitHub is a platform for hosting, sharing, and collaborating on code. It allows you to store your code in repositories, track changes, work with others, and deploy projects easily. Think of it as **Google Drive for code** but with extra superpowers!

---

## 1. Creating a Repository (Repo)
A **repository** (or repo) is where your project's files and version history are stored.

### Steps to Create a Repository:
1. Log in to [GitHub](https://github.com/).
2. Click on the **+** icon in the top right and select **New repository**.
3. Give your repository a name.
4. Choose **Public** (anyone can see it) or **Private** (only you can see it).
5. Click **Create repository**.

---

## 2. Cloning a Repository
Cloning allows you to download a repository from GitHub to your computer.

### Steps to Clone a Repository:
1. Go to the repository you want to clone.
2. Click on the **Code** button and copy the URL.
3. Open your terminal and type:
   ```sh
   git clone <repository-url>
   ```
4. Press **Enter**, and the repo will be copied to your computer.

---

## 3. Understanding Markdown on GitHub
GitHub uses **Markdown** for writing formatted text. Markdown is a lightweight way to style text on the web.

### Basic Markdown Syntax:
```md
# Heading 1
## Heading 2
### Heading 3

**Bold Text**
*Italic Text*

- Bullet Point 1
- Bullet Point 2

[Link to GitHub](https://github.com/)

```
**For a full Markdown guide, check out the official GitHub documentation:** [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)

---

## 4. Committing and Pushing Changes
After making changes to your files, you need to save them and upload them to GitHub.

### Steps to Commit and Push:
1. Open your terminal in the repository folder.
2. Type the following commands:
   ```sh
   git add .
   git commit -m "Your commit message here"
   git push origin main
   ```
3. Your changes are now uploaded to GitHub!

---

## 5. Creating a Pull Request (PR)
A **pull request** lets you propose changes to someone else's repository.

### Steps to Create a Pull Request:
1. Fork the repository (Click the **Fork** button on GitHub).
2. Clone your forked repository.
3. Make changes and commit them.
4. Push your changes to your forked repository.
5. Go to the original repository and click **New Pull Request**.
6. Compare changes and click **Create Pull Request**.

---
This guide covers only the **most essential** GitHub features to help you get started quickly. Remember, GitHub is a powerful tool with many more features to explore. If you're new, stick to these basics, and you'll be productive in no time.

**Happy coding! 🚀 Thank You for reading**

