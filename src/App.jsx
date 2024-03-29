import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/Routes.jsx";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router className="grid-container">
                <RoutesComponent />
            </Router>
        </>
    );
}

export default App;
