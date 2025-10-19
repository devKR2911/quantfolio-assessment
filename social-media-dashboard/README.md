# Social Media Dashboard

This project is a **dashboard application** built using modern web technologies and tools to provide a responsive and interactive user experience.

## 🔧 Tech Stack

- [**React JS** (v19.1.1)](https://react.dev/)
- [**Vite**](https://vite.dev/) – for fast and optimized development build]
- [**dnd-kit**](https://dndkit.com/) – for drag-and-drop functionality
- [**Recharts**](https://recharts.org/en-US) – for data visualization

## 📚 Documentation

The core components of the application are documented using **Storybook**, enabling easy development, testing, and collaboration.

## 🎨 Styling

All styling is implemented using **custom SCSS**, without relying on any third-party UI libraries. This ensures full control over the design and consistency across the application.

## ✅ Code Quality

- The project adheres to strict **ESLint** and **Stylelint** rules to maintain high code quality and consistency.
- A **pre-commit hook** is configured using **Husky** and **lint-staged** to automatically validate staged files before each commit.
- Commits with linting errors are blocked to ensure only clean code is pushed to the repository.

## Running the application in local machine

- Clone the github repository
- Install application packages using the command `npm install`
- Run the command `npm run dev` for staring the development server
- The application will be up and running in the url [http://localhost:3000](http://localhost:3000/)

## Running storybook

- The application core component documentation is implemented using storybook for the reference of future development and onbording of new assoiates when it comes to an enterprice application.

To run the storybook

- Build the sorybook with command `npm run build-storybook`
- Once the build has been completed, run storbook with command `npm run storybook`
- The storybook will be opened in url [http://localhost:6006/](http://localhost:6006/)

## 🧱 Application Architecture

Built with React 19, this is a single-page application. Routing is currently not implemented but can be added using React Router if needed.

### 📁 Folder Structure

    src/
    ├── assets/
    │ ├── images/ # Icons and images
    │ └── scss/ # Global styles, SCSS variables, tokens
    ├── components/
    │ ├── business/ # Data-coupled components
    │ └── core/ # Stateless reusable components
    ├── data/ # Data sources used in the app
    ├── interfaces/ # Data structures and TypeScript interfaces
    ├── App.tsx
    └── main.tsx

All components are designed to be highly reusable and modular.

## 🌗 Features & Functionality

### 🌞 Light Mode

Light Mode Preview

<p align="center">
  <img src="./documentation/Light%20Mode.png" alt="Library App Preview" width="600"/>
</p>

### 🌙 Dark Mode

Dark Mode Preview

<p align="center">
  <img src="./documentation/Dark%20Mode.png" alt="Library App Preview" width="600"/>
</p>

### Application theme can be switched from light to dark using the toggle button in header.

This theme is preserved in brower memory, so that even if you refresh the theme will be preserved with your previous selection.

Theme Switcher Preview

<p align="center">
  <img src="./documentation/Theme%20Switcher.png" alt="Library App Preview" width="600"/>
</p>

### 🔄 Flip Cards in Total Overview

Cards in the Total Overview section are interactive and can be flipped to reveal additional insights.

<p align="center">
  <img src="./documentation/Flipped Total Overview.png" alt="Library App Preview" width="600"/>
</p>

### 🧩 Drag & Rearrange in Today's Overview

The cards displayed in the "Todays overview" section are draggable and can be rearranged in any order. The application preservs the order after rearrangement nad is stored in the local storage memeor, so that this will be preserved even if we refresh the app

<p align="center">
  <img src="./documentation/Rearrangable todays overview.png" alt="Library App Preview" width="600"/>
</p>

### 📈 Analysis Report

A detailed yearly analysis report is presented at the bottom of the dashboard, showcasing subscriber data using:

- Line Graph
- Pie Chart
- Bar Chart

<p align="center">
  <img src="./documentation/Analysis Report.png" alt="Library App Preview" width="600"/>
</p>
