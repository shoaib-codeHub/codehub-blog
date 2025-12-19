# 📝 CodeHub Blog

A clean, minimalist blog application built using **Node.js** and **Express.js**, utilizing **EJS** for server-side rendering and **CSS** for a responsive design. This project demonstrates full CRUD (Create, Read, Update, Delete) capabilities with an in-memory data structure.

---
### Key Files and Directories Explained:

*  **`index.js`**: The core entry point of the application.  It initializes the Express server, configures middleware (body-parser), sets up the EJS view engine, and manages the in-memory posts array.  It also handles all routing logic for the blog.
*  **`package.json`**: Defines the project metadata and dependencies (`express`, `ejs`, `body-parser`), and includes the start script to run the server.
*  **`.gitignore`**: A standard file that instructs Git to exclude the `node_modules` directory from version control.

* **`views/`**: This directory contains all the EJS templates used to render the user interface:
    * **`index.ejs`**: The main landing page.  It displays the "Recent Posts" feed and provides the form to create new blog posts[cite: 2].
    *  **`edit.ejs`**: A dynamic page that pre-fills existing post data into a form, allowing users to update their content[cite: 20].
    *  **`about.ejs`**: A static informational page describing the blog's mission and team[cite: 10].
    * **`partials/`**: Contains reusable UI components to ensure consistency across pages:
        *  **`header.ejs`**: The top navigation bar linking to Home and About pages[cite: 19].
        *  **`footer.ejs`**: The site footer containing copyright information (dynamically updated year) and social media links[cite: 17].

* **`public/styles/`**: This directory holds the static assets for styling:
    * **`style.css`**: The main stylesheet.  It defines CSS variables (root colors), handles the layout for post cards, styles the forms, and ensures responsive design for different screen sizes[cite: 5].

---

## 🚀 Features

- 🛠️ **Full CRUD Operations**
  -  **Create:** Simple form to publish new posts instantly.
  -  **Read:** Homepage feed displaying all current posts.
  -  **Update:** Dedicated edit route to modify existing content.
  -  **Delete:** Remove posts with a confirmation safety prompt[cite: 8].

- 🎨 **Dynamic Templating**
  -  Built with **EJS** for modular code.
  -  Reusable Header and Footer partials included on every page[cite: 2].
  -  Dynamic data rendering for post titles and content[cite: 21].

- 📱 **Responsive Design**
  -  Custom CSS using variables for easy theming[cite: 5].
  -  Clean, distraction-free reading layout[cite: 5].
  -  Mobile-friendly form inputs and buttons[cite: 5].

- ⚙️ **Backend Logic**
  -  **Express.js** routing handling `GET` and `POST` requests.
  -  **Body-Parser** integration to handle form data submission.
  -  In-memory data storage (non-persistent array) for fast prototyping.

---

## 🧩 Setup Instructions

### 1. Clone the Repository

```bash
git clone [https://github.com/shoaib-codeHub/codehub-blog.git](https://github.com/shoaib-codeHub/codehub-blog.git)
cd codehub-blog
