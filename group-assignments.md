# Group Assignments for Git Practice Exercise

## Setup Instructions
```bash
git clone [repository-url]
cd [repository-name]
git status # verify you're on main
```

---

## Group 1: Add New Programming Languages
**Branch naming convention:** `group-1-add-languages-[student-name]`

### Tasks:
1. **Student A:** Add Rust to the languages list
2. **Student B:** Add Go to the languages list
3. **Student C:** Add TypeScript to the languages list
4. **Student D:** Add Kotlin to the languages list
5. **Student E:** Add Swift to the languages list
6. **Student F:** Add PHP to the languages list

### Git Workflow:
```bash
git checkout -b group-1-add-languages-[your-name]
# Edit data/languages.json to add your language
git add data/languages.json
git commit -m "Add [Language Name] to programming languages list"
git push origin group-1-add-languages-[your-name]
```

---

## Group 2: Add Language Features
**Branch naming convention:** `group-2-add-features-[student-name]`

### Tasks:
1. **Student A:** Add "Web development" feature to JavaScript
2. **Student B:** Add "Data science" feature to Python
3. **Student C:** Add "Enterprise applications" feature to Java
4. **Student D:** Add "Mobile apps" feature to Kotlin
5. **Student E:** Add "System programming" feature to Rust
6. **Student F:** Add "Scripting" feature to PHP

### Git Workflow:
```bash
git checkout -b group-2-add-features-[your-name]
# Edit data/languages.json to add your feature
git add data/languages.json
git commit -m "Add [Feature] to [Language Name]"
git push origin group-2-add-features-[your-name]
```

---

## Group 3: Update Language Descriptions
**Branch naming convention:** `group-3-update-descriptions-[student-name]`

### Tasks:
1. **Student A:** Update JavaScript description to mention web development
2. **Student B:** Update Python description to mention AI/ML
3. **Student C:** Update Java description to mention enterprise
4. **Student D:** Update Kotlin description to mention Android
5. **Student E:** Update Swift description to mention iOS
6. **Student F:** Update PHP description to mention web servers

### Git Workflow:
```bash
git checkout -b group-3-update-descriptions-[your-name]
# Edit data/languages.json to update descriptions
git add data/languages.json
git commit -m "Update [Language Name] description"
git push origin group-3-update-descriptions-[your-name]
```

---

## Group 4: Add Language Years
**Branch naming convention:** `group-4-add-years-[student-name]`

### Tasks:
1. **Student A:** Add "year" field to JavaScript (1995)
2. **Student B:** Add "year" field to Python (1991)
3. **Student C:** Add "year" field to Java (1995)
4. **Student D:** Add "year" field to Kotlin (2011)
5. **Student E:** Add "year" field to Swift (2014)
6. **Student F:** Add "year" field to PHP (1995)

### Git Workflow:
```bash
git checkout -b group-4-add-years-[your-name]
# Edit data/languages.json to add year field
git add data/languages.json
git commit -m "Add year field to [Language Name]"
git push origin group-4-add-years-[your-name]
```

---

## Group 5: Add Language Types
**Branch naming convention:** `group-5-add-types-[student-name]`

### Tasks:
1. **Student A:** Add "type" field to JavaScript ("Dynamic")
2. **Student B:** Add "type" field to Python ("Dynamic")
3. **Student C:** Add "type" field to Java ("Static")
4. **Student D:** Add "type" field to Kotlin ("Static")
5. **Student E:** Add "type" field to Swift ("Static")
6. **Student F:** Add "type" field to PHP ("Dynamic")

### Git Workflow:
```bash
git checkout -b group-5-add-types-[your-name]
# Edit data/languages.json to add type field
git add data/languages.json
git commit -m "Add type field to [Language Name]"
git push origin group-5-add-types-[your-name]
```

---

## Group 6: Add Language Popularity
**Branch naming convention:** `group-6-add-popularity-[student-name]`

### Tasks:
1. **Student A:** Add "popularity" field to JavaScript (9)
2. **Student B:** Add "popularity" field to Python (8)
3. **Student C:** Add "popularity" field to Java (7)
4. **Student D:** Add "popularity" field to Kotlin (6)
5. **Student E:** Add "popularity" field to Swift (6)
6. **Student F:** Add "popularity" field to PHP (7)

### Git Workflow:
```bash
git checkout -b group-6-add-popularity-[your-name]
# Edit data/languages.json to add popularity field
git add data/languages.json
git commit -m "Add popularity field to [Language Name]"
git push origin group-6-add-popularity-[your-name]
```

---

## Conflict Resolution Example

**Student A's change:**
```json
"description": "JavaScript is used for web development."
```
**Student B's change:**
```json
"description": "JavaScript is a dynamic programming language."
```
**Resolution:**
```json
"description": "JavaScript is a dynamic programming language used for web development."
```

---

## Assessment Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| Proper branch naming | 10 | Follows naming convention |
| Meaningful commit messages | 15 | Clear, descriptive commit messages |
| Successful feature implementation | 25 | Code works correctly |
| Conflict resolution | 30 | Successfully resolves merge conflicts |
| Pull request quality | 20 | Good description and code review |

---

## Tips for Success
1. **Communicate with your group** before making changes
2. **Pull latest changes** before starting work: `git pull origin main`
3. **Test your changes** locally before pushing
4. **Write clear commit messages** that explain what you did
5. **Don't panic** when conflicts occur - they're part of the learning process
6. **Ask for help** if you're stuck on conflict resolution 