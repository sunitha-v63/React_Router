import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <>
    <p>Home Page</p>
      <div className="content">
        <h1>Router</h1>
        <br />
        <h3>Task 1:Introduction of React Router</h3>
        <ul>
          <li>
            React is a single-page application (SPA) framework. Without React
            Router, navigating between pages requires reloading the entire app.{" "}
          </li>
          <li>
            React Router enables navigation between different pages in a React
            app without a full page reload.{" "}
          </li>
          <li>
            It uses client-side routing, meaning it changes the URL and updates
            the UI without refreshing the page.{" "}
          </li>
        </ul>
        <br />
        <h3>Task 2:Install React Router</h3>
        <p>npm install react-router-dom </p>
        <br />
        <h3>Task 3:BrowserRouter</h3>
        <br />
        <h3>Task 4:Basic Route Setup</h3>
        <br />
        <h3>Task 5:Navigation</h3>
        <br />
        <h3>Task 6: Exact Path Usage</h3>
        <p>
          The path prop defines a URL pattern that a route should match, while
          the exact path prop indicates that a route should only match an exact
          URL.
        </p>
        <br />
        <h3>Task 7:Default Route (/Home page)</h3>
        <br />
        <h3>Task 8:404 Page Setup</h3>
        <p>NotFound Components</p>
        <br />
        <h3>Task 9: Active Link Styling:</h3>
        <p>
          NavLink is a specialized version of Link that automatically adds an
          "active" class to the rendered element when the link's route matches
          the current URL, allowing for easy styling of active navigation
          elements, while Link provides basic navigation without such automatic
          styling
        </p>
        <ul>
          <li>Link: The Simple Navigator</li>
          <li>NavLink: Highlighting the Active Path</li>
        </ul>
        <h3>Task 10:Nested Route</h3>
        <br />
        <h3>Task 11:Navigate Programmatically</h3>
        <p>Button click</p>
        <br />
        <button onClick={() => navigate("/about")}>Navigate</button>
        <br />
        <br />
        <h3>Task 12:Navigate Bar Components</h3>
        <br />
        <h3>Task 13:Protected Page Example (Static Check):</h3>
      </div>
    </>
  );
}

export default Home;
