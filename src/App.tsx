import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./app/Home";
import Dashboard from "./app/Dashboard";
import { pathApp } from "./configs/path";
import { RootLayout } from "./layout";

function App() {
  return (
    <RootLayout>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: pathApp.home,
            element: <Home />,
          },
          {
            path: pathApp.dashboard,
            element: <Dashboard />,
          },
          // Add more routes as needed
        ])}
      />
    </RootLayout>
  );
}

export default App;
