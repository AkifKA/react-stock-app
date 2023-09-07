# Overview of Stock App Project:

The Stock App Project is a web-based application developed to manage and track various processes for businesses, aiming to simplify tasks such as inventory tracking, purchasing, and sales operations. And it is online single page web application that enables you to manage orders and inventory with ability to get, add, edit, or delete products, firms, brands, sales, and purchases. 

# Technical Stack:
HTML, CSS, JavaScript, React, and Material.UI in frontend, Python Django for CRUD operations and authentication-authorization in backend and React context and Redux Toolkit for state management.

### Below is an overview of the main components and features of the project:

User Registration and Login:
Users can create accounts and log in to the system. This allows each user to manage their own stocks.

Company Management:
Company details (name, phone, address, image, etc.) can be added or updated for tracking purposes. New companies can be added, and existing companies can be edited.

Brand Management:
Brand information (name, image) can be added or updated and saved. Defining brands helps categorize products for better tracking.

Product Management:
Products are added to the system, associated with brands and categories. Information such as product name, image, brand, and category is stored.

Purchase Operations:
Purchase transactions are conducted by selecting a company and product. Quantity and price information is entered to update the stock.

Sales Operations:
Sales transactions are performed by selecting a product and quantity. This operation deducts from the stock and records revenue.

Inventory Tracking:
Current stock quantities, product details, and statuses can be viewed. Monitoring stock levels helps identify reorder requirements.

Formik Form Usage:
Formik library is used for user registration and editing. This enables collecting user information and implementing validation checks.

UI Components:
The project utilizes UI components from the MUI (Material-UI) library, providing a user-friendly interface. These components include form fields, buttons, cards, modals, and more.

API Requests and Connections:
Axios library is used to communicate with the backend. API requests are made to add, update, or retrieve data from the database.

Redux Implementation:
Redux is employed to provide a centralized data store. This facilitates storing and sharing data across different components of the application.

Reusable Custom Hooks:
Custom hooks are used to abstract certain common operations and functions, enhancing code reusability and organization.

Routing and Page Navigation:
React Router is used to enable navigation between different pages. Users can easily access different sections of the application.


<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p6N2p2anZlNjE0Z3J5bWdsaG80eHY0YmNzOXVpcmNsbzBoZ2puZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x8pZi2LRPNmpN6ZxQp/giphy.gif" align="center" width="900" />


# Project Structure
```
├── src
│    ├── index.js
│    ├── App.js
|    │── app
│    │   └── store.jsx
│    ├── assets
│    │   └── loading.gif 
│    ├── components
│    │   ├── modals
│    │   │   ├── BrandModals.jsx
│    │   │   └── Firm Modals.jsx
│    │   │   └── Product Modals.jsx
│    │   │   └── Purchase Modals.jsx
│    │   │   └── Sale Modals.jsx
│    │   ├── BrandCard.jsx
│    │   └── Chart.jsx
│    │   └── FirmCard.jsx
│    │   └── KpiCards.jsx
│    │   └── LoginForm.jsx
│    │   └── MenuListItems.jsx
│    │   └── ProductCard.jsx
│    │   └── SignUpForm.jsx
│    ├── features
│    │   ├── authSlice.jsx
│    │   └── stockSlice.jsx
│    ├── helper
│    │   ├── ToastNotify.jsx
│    ├── pages
│    │   ├── Brands.jsx
│    │   ├── Dashboard.jsx
│    │   ├── Firms.jsx
│    │   ├── Dashboard.jsx
│    │   ├── Login.jsx
│    │   ├── Products.jsx
│    │   └── Purchases.jsx
│    │   └── Register.jsx
│    │   └── Sales.jsx
│    ├── router
│    │   ├── AppRouter.js
│    │   └── PrivateRouter.js
│    └── styles
│        └── globalStyles.jsx
```
