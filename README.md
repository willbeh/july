# Git Collaboration Practice Exercise

This repository contains a collaborative coding exercise designed to help students practice Git workflows including branching, committing, and creating pull requests.

## Project Overview

This is a simple web application that displays a list of programming languages with their features. Students will work in groups to add new languages and features to the application.

## Setup Instructions

1. Clone this repository
2. Each group should create their own branch: `git checkout -b group-[number]-[feature]`
3. Make your changes
4. Commit your changes: `git commit -m "Add [your feature]"`
5. Push your branch: `git push origin group-[number]-[feature]`
6. Create a Pull Request on GitHub/GitLab

## Group Assignments

### Group 1: Add New Programming Languages (Conflict-Free)
- Add 2-3 new programming languages to the list
- Each student adds different languages
- Should merge without conflicts

### Group 2: Add Language Features (Conflict-Free)
- Add new features to existing languages
- Each student adds different features
- Should merge without conflicts

### Group 3: Modify Language Descriptions (Potential Conflicts)
- Update descriptions of existing languages
- Multiple students may edit the same language
- Will likely create merge conflicts

### Group 4: Reorganize Data Structure (High Conflict Potential)
- Change the data structure format
- Multiple students may modify the same files
- Will definitely create merge conflicts

## Learning Objectives

- Creating and switching between branches
- Making commits with meaningful messages
- Pushing branches to remote
- Creating pull requests
- Resolving merge conflicts
- Code review process
- Collaborative development workflow

## Files Structure

- `index.html` - Main application file
- `styles.css` - Styling for the application
- `script.js` - JavaScript functionality
- `data/languages.json` - Programming languages data
- `docs/` - Documentation files
- `tests/` - Test files

## Conflict Resolution Guide

When merge conflicts occur:
1. Pull the latest changes from main branch
2. Identify conflicting files
3. Open conflicting files and look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Decide which changes to keep or combine them
5. Remove conflict markers
6. Stage and commit the resolved files
7. Complete the merge

## Assessment Criteria

- Proper branch naming
- Meaningful commit messages
- Clean pull request descriptions
- Successful conflict resolution
- Code quality and functionality
- Team collaboration