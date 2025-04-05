Below is the README file for the `PulseBudget Viewer` frontend application. I've incorporated the following changes:
- Added login credentials (`userName: Fuad, email: fuad@gmail.com, password: fuad123`) for testing purposes.
- Included a section explaining how access works for Viewer and Admin roles, aligned with your project's authentication logic.
- Added the live deployment link (`https://pulsebudget-viewer.vercel.app/`) where applicable.
- Enhanced clarity and structure for better usability.

---
```markdown
# PulseBudget Viewer

PulseBudget Viewer is a React-based frontend application designed to display budget-related data fetched from a backend API. It provides a simple, responsive dashboard interface to visualize budget allocations, with role-based access for Viewers and Admins.

## Features
- Displays total allocated budget, spent amount, and remaining budget in a card-based layout.
- Fetches data dynamically from a backend API using Axios.
- Includes loading and error states for improved user experience.
- Styled with Tailwind CSS for a modern and clean design.
- Role-based access: Viewers see summaries, Admins see detailed transaction data.

## Prerequisites
- **Node.js**: Version 16.x or higher.
- **Yarn**: Package manager (install via `npm install -g yarn` if not already installed).
- **Backend API**: A running backend server (e.g., at `http://localhost:3000` or `https://pulsebudget-server.onrender.com/`) to provide budget data.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/fuadhossainnishad/pulsebudget_viewer.git
   cd pulsebudget_viewer
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```
   This installs React, Axios, Tailwind CSS, and other dependencies listed in `package.json`.

3. **Configure the API Client**:
   - Open `src/lib/client.js` to configure the Axios client.
   - Ensure the `baseURL` matches your backend API endpoint:
     ```javascript
     import axios from 'axios';

     const client = axios.create({
       baseURL: 'https://pulsebudget-server.onrender.com', // Live backend URL
       // baseURL: 'http://localhost:3000', // Uncomment for local development
     });

     export { client };
     ```

## Running the Application
1. **Start the Development Server**:
   ```bash
   yarn dev
   ```
   - This typically runs the app on `http://localhost:3000` (check your terminal for the exact port).

2. **Open in Browser**:
   - Visit `http://localhost:3000` (local) or [https://pulsebudget-viewer.vercel.app/](https://pulsebudget-viewer.vercel.app/) (live) to view the dashboard.

## Project Structure
```
pulsebudget_viewer/
├── src/
│   ├── app/
│   │   └── page.tsx         # Main page component with dashboard UI
│   ├── lib/
│   │   └── client.js       # Axios client configuration
│   └── ...                 # Other files (styles, components, etc.)
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Usage
- The dashboard displays budget data fetched from the backend API endpoint `/api/budget/dashboard` on page load.
- Without login, users see a summary view (Viewer mode).
- After logging in, Admins see additional transaction details.

### Login Credentials (For Testing)
Use the following credentials to log in and test Admin features:
- **Username**: `Fuad`
- **Email**: `fuad@gmail.com`
- **Password**: `fuad123`
- **Steps**:
  1. Visit [https://pulsebudget-viewer.vercel.app/](https://pulsebudget-viewer.vercel.app/).
  2. Use the login form (if implemented) or send a `POST` request to `https://pulsebudget-server.onrender.com/api/users/login` with:
     ```json
     {
       "email": "fuad@gmail.com",
       "password": "fuad123"
     }
     ```
  3. Use the returned JWT token in subsequent requests (e.g., via `Authorization: Bearer <token>`).

## Access Levels
### Viewer (Non-Logged-In Users)
- **Access**: Read-only summary view.
- **Features**:
  - View total allocated budget, spent amount, and remaining budget in cards.
  - Apply filters to see data by subsidiary or sector (via `/api/budget/filter`).
  - No access to detailed transaction data (e.g., `Transaction_ID`, `Date`).
- **How It Works**:
  - No JWT token is sent in API requests.
  - Backend defaults to Viewer mode, restricting sensitive data.

### Admin (Logged-In Users)
- **Access**: Full access to all data and features.
- **Features**:
  - View summary data (same as Viewer).
  - Access detailed transaction records (e.g., table with `Transaction_ID`, `Date`, `Subsidiary`, etc.).
  - Manage budget data (if frontend supports CRUD operations).
- **How It Works**:
  - After logging in with credentials (e.g., `fuad@gmail.com`/`fuad123`), a JWT token is stored in `localStorage`.
  - The token is included in API requests (e.g., `Authorization: Bearer <token>`).
  - Backend verifies the token and grants Admin-level access.

## Live Deployment
- **Frontend**: Hosted on Vercel at [https://pulsebudget-viewer.vercel.app/](https://pulsebudget-viewer.vercel.app/)
  - Connects to the live backend for data.
- **Backend**: Hosted on Render at [https://pulsebudget-server.onrender.com/](https://pulsebudget-server.onrender.com/)
  - Provides API endpoints like `/api/budget/dashboard` and `/api/users/login`.

## Troubleshooting
- **Network Error**: If you encounter an "AxiosError: Network Error":
  - Ensure the backend server is running and accessible at the configured `baseURL` (e.g., `https://pulsebudget-server.onrender.com`).
  - Check the browser's Network tab (F12) for failed requests.
  - Verify CORS settings on the backend allow requests from `https://pulsebudget-viewer.vercel.app`.
- **No Data Displayed**:
  - Confirm the API returns data in the expected format (e.g., `{ budget: [...], subsidiary: [...] }`).
  - Ensure you’re logged in with Admin credentials for full data access.
- **Login Fails**:
  - Verify the credentials (`fuad@gmail.com`, `fuad123`) are correct and the backend user exists.
  - Check the backend logs for errors (e.g., JWT secret mismatch).

## Dependencies
- **React**: Core library for building the UI.
- **Axios**: HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Development
- **Add Features**: Extend the dashboard by adding more data fields (e.g., branches, expenses) or charts from the API.
- **Run Locally**: Use `yarn dev` for development with hot reloading.
- **Test Login**: Use the provided credentials (`Fuad`, `fuad@gmail.com`, `fuad123`) to test Admin access locally or on the live deployment.

## Contributing
1. Fork the repository: `https://github.com/fuadhossainnishad/pulsebudget_viewer.git`.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, feel free to open an issue on the [GitHub repository](https://github.com/fuadhossainnishad/pulsebudget_viewer) or contact the maintainer.
```

---