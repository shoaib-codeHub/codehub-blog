# 📝 CodeHub Blog

A clean, minimalist blog application built using **Node.js** and **Express.js**, utilizing **EJS** for server-side rendering and **CSS** for a responsive design. This project demonstrates full CRUD (Create, Read, Update, Delete) capabilities with an in-memory data structure.

---
### Key Files and Directories Explained:

* [cite_start]**`index.js`**: The core entry point of the application. [cite_start]It initializes the Express server, configures middleware (body-parser), sets up the EJS view engine, and manages the in-memory posts array. [cite_start]It also handles all routing logic for the blog.
* [cite_start]**`package.json`**: Defines the project metadata and dependencies (`express`, `ejs`, `body-parser`), and includes the start script to run the server.
* [cite_start]**`.gitignore`**: A standard file that instructs Git to exclude the `node_modules` directory from version control.

* **`views/`**: This directory contains all the EJS templates used to render the user interface:
    * **`index.ejs`**: The main landing page. [cite_start]It displays the "Recent Posts" feed and provides the form to create new blog posts[cite: 2].
    * [cite_start]**`edit.ejs`**: A dynamic page that pre-fills existing post data into a form, allowing users to update their content[cite: 20].
    * [cite_start]**`about.ejs`**: A static informational page describing the blog's mission and team[cite: 10].
    * **`partials/`**: Contains reusable UI components to ensure consistency across pages:
        * [cite_start]**`header.ejs`**: The top navigation bar linking to Home and About pages[cite: 19].
        * [cite_start]**`footer.ejs`**: The site footer containing copyright information (dynamically updated year) and social media links[cite: 17].

* **`public/styles/`**: This directory holds the static assets for styling:
    * **`style.css`**: The main stylesheet. [cite_start]It defines CSS variables (root colors), handles the layout for post cards, styles the forms, and ensures responsive design for different screen sizes[cite: 5].

---

## 🚀 Features

- 🛠️ **Full CRUD Operations**
  - [cite_start]**Create:** Simple form to publish new posts instantly.
  - [cite_start]**Read:** Homepage feed displaying all current posts.
  - [cite_start]**Update:** Dedicated edit route to modify existing content.
  - [cite_start]**Delete:** Remove posts with a confirmation safety prompt[cite: 8].

- 🎨 **Dynamic Templating**
  - [cite_start]Built with **EJS** for modular code.
  - [cite_start]Reusable Header and Footer partials included on every page[cite: 2].
  - [cite_start]Dynamic data rendering for post titles and content[cite: 21].

- 📱 **Responsive Design**
  - [cite_start]Custom CSS using variables for easy theming[cite: 5].
  - [cite_start]Clean, distraction-free reading layout[cite: 5].
  - [cite_start]Mobile-friendly form inputs and buttons[cite: 5].

- ⚙️ **Backend Logic**
  - [cite_start]**Express.js** routing handling `GET` and `POST` requests.
  - [cite_start]**Body-Parser** integration to handle form data submission.
  - [cite_start]In-memory data storage (non-persistent array) for fast prototyping.

---

## 🧩 Setup Instructions

### 1. Clone the Repository

```bash
git clone [https://github.com/shoaib-codeHub/codehub-blog.git](https://github.com/shoaib-codeHub/codehub-blog.git)
cd codehub-blog
