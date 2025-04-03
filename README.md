# PulseBudget Viewer

PulseBudget Viewer is a React-based frontend application designed to display budget-related data fetched from a backend API. It provides a simple, responsive dashboard interface to visualize budget allocations.

## Features
- Displays total allocated budget in a card-based layout.
- Fetches data dynamically from a backend API using Axios.
- Includes loading and error states for improved user experience.
- Styled with Tailwind CSS for a modern and clean design.

## Prerequisites
- **Node.js**: Version 16.x or higher.
- **Yarn**: Package manager (install via `npm install -g yarn` if not already installed).
- **Backend API**: A running backend server (e.g., at `http://localhost:3000`) to provide budget data.

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
   - Ensure the `baseURL` matches your backend API endpoint, e.g.:
     ```javascript
     import axios from 'axios';

     const client = axios.create({
       baseURL: 'http://localhost:3000', // Update to your backend URL
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
   Visit `http://localhost:3000` to view the dashboard.

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
- The dashboard displays three sections showing the "Total Allocated Budget" by default.
- Data is fetched from the backend API endpoint `/` on page load.
- If the API call fails, an error message is shown. A "Loading..." message appears during data fetching.

## Troubleshooting
- **Network Error**: If you encounter an "AxiosError: Network Error":
  - Ensure the backend server is running and accessible at the configured `baseURL`.
  - Check the browser's Network tab (F12) for failed requests.
  - Verify CORS settings on the backend if running on a different origin.
- **No Data Displayed**: Confirm the API returns data in the expected format (e.g., `{ totalBudget: 2000000 }`).

## Dependencies
- **React**: Core library for building the UI.
- **Axios**: HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Development
- **Add Features**: Extend the dashboard by adding more data fields (e.g., branches, expenses) from the API.
- **Run Locally**: Use `yarn dev` for development with hot reloading.

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