# E-Commerce Frontend Application

This is a frontend e-commerce application built with React, Redux, and Tailwind CSS. The application allows users to browse products, add them to a shopping cart, and view their cart contents. Users can sign up, log in, and navigate through the application.

## Features

- **Product Listing**: Displays a list of products fetched from a public API.
- **Shopping Cart**: Allows users to add and remove items from the cart.
- **User Authentication**: Includes sign-up and login pages (without actual backend validation).
- **Product Filtering**: Provides filtering options to refine product searches.
- **Responsive Design**: Utilizes Tailwind CSS for a responsive and professional-looking design.
- **Dynamic State Management**: Uses Redux for managing cart state and user interactions.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management library for handling global state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Library for routing and navigation.
- **Custom Hooks**: For fetching data and managing side effects.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
   Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

Install dependencies:

```bash

npm install
```

Start the development server:

```bash

npm start
```

## The application should be running on [http://localhost:5173](http://localhost:5173).

## Usage

### Home Page

Users are directed to the sign-up page on initial load.

### Sign Up

Fill out the sign-up form and submit to navigate to the login page.

### Login

Enter login credentials to access the home page.

### Product Browsing

Browse products, view details, and use the filter checkbox.

### Add to Cart

Add products to the cart and view cart contents.

### Checkout

Proceed to checkout (mock implementation without real payment processing).

## Code Structure

- **src/components**: Contains reusable components like Navbar, Footer, and Product Card.
- **src/pages**: Contains pages for Sign Up, Login, and other views.
- **src/features**: Contains Redux slices and state management logic.
- **src/hooks**: Custom hooks for data fetching and other utilities.
- **src/App.jsx**: Main application component with routing logic.
- **src/main.jsx**: Entry point for React rendering and application setup.

## API Endpoints

- **Product API**: [Fake Store API](https://fakestoreapi.com/products)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, you can reach out to:

- **Email**: [nimanurusherpa2022@gmail.com](mailto:nimanurusherpa2022@gmail.com)
