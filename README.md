# 🌐 Personal Portfolio Website – Frontend Developer Showcase

This is my **personal portfolio website** built to professionally showcase my **skills, projects, and contact details** as a frontend / full-stack developer.

The website is fully responsive, interactive, and designed to reflect **real-world UI standards**.
It also includes a **working contact form using EmailJS**, allowing visitors to contact me directly without any backend server.

---

## ✨ Project Overview

The Portfolio Website serves as:

* 🧑‍💻 A **personal brand website**
* 📂 A **project showcase platform**
* 📩 A **direct contact channel** using EmailJS
* 📱 A **fully responsive frontend application**

This project focuses strongly on **clean UI, UX, responsiveness, and frontend best practices**.

---

## 🚀 Live Demo

👉 **Live Website**: *(https://portfolio-zzb6.vercel.app/)*

---

## 🛠️ Tech Stack

### 🔹 Frontend

* ⚛️ **React.js**
* 🎨 **HTML5 & CSS3**
* 🎯 **Tailwind CSS / SCSS** (for modern styling)
* 🔁 **JavaScript (ES6+)**
* 📱 **Responsive Design (Mobile First)**

---

### 🔹 Third-Party Services

* 📧 **EmailJS** – for sending emails directly from the frontend
* 🌐 **Vercel / GitHub Pages** – deployment

---

## 📦 Packages & Libraries Used

* `react`
* `react-router-dom`
* `emailjs-com`
* `react-icons`
* `tailwindcss` / `scss`

---

## 🧩 Website Sections

### 🏠 Home

* Clean landing section
* Introduction & role description
* Call-to-action buttons

### 👩‍💻 About Me

* Short personal introduction
* Skills & interests
* Career focus and goals

### 🛠 Skills

* Frontend skills highlighted visually
* Technologies clearly categorized
* Clean and readable layout

### 📂 Projects Section

* Displays real projects I have built
* Includes:

  * Project images
  * Project title & description
  * Tech stack used
* 🔍 **Filter functionality** to view projects by category

### 📩 Contact Section (EmailJS)

* Fully functional contact form
* Sends messages directly to my email
* No backend required
* Includes:

  * Name
  * Email
  * Message

---

## 📧 EmailJS Integration

✔ Contact form connected using **EmailJS**
✔ No backend or database required
✔ Secure & fast email delivery
✔ Easy configuration using public keys

Example usage:

```js
emailjs.sendForm(
  "service_id",
  "template_id",
  formRef.current,
  "public_key"
)
```

---

## 🖼️ Images & Assets

* All project images and icons are optimized
* Images are stored locally and imported correctly
* Ensures fast loading & clean structure

---

## 📱 Responsive Design

* Mobile-friendly layout 📱
* Tablet & desktop optimized 💻
* Responsive navigation bar
* Adaptive grid layouts

---

## 🎯 Key Features

✅ Clean UI & modern design
✅ Project filtering functionality
✅ Working contact form
✅ No backend dependency
✅ Fast loading & optimized assets
✅ Easy navigation
✅ Professional layout

---

## 🧠 What I Learned from This Project

* Structuring a **real portfolio website**
* Building reusable React components
* Handling **EmailJS integration**
* Creating responsive layouts
* Managing assets & images correctly
* Writing clean, maintainable frontend code

---

## 🔮 Future Enhancements

* 🌙 Dark mode
* ✨ Animations (Framer Motion)
* 🧑‍💼 Resume download button
* 📊 Project analytics
* 🌍 Multi-language support

---

## 🙌 Conclusion

This Portfolio Website represents my **frontend skills, design sense, and real-world implementation ability**.
It is built with a focus on **clarity, usability, and professionalism**, making it suitable for recruiters, clients, and collaborators.

---

⭐ Feel free to explore the code and connect with me!


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
