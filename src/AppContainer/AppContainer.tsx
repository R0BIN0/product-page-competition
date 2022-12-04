import { HashRouter as BrowserRouter } from "react-router-dom";
import App from "../app/App";

export default function AppContainer() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
