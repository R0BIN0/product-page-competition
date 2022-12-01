// Global

// Styles
import "./App.css";

// Components
import ProductLeftSide from "./components/product-left-side/product-left-side";
import ProductRightSide from "./components/product-right-side/product-right-side";

function App() {
    return (
        <div className="product-page-global-container">
            <div className="product-page-container">
                <ProductLeftSide />
                <ProductRightSide />
            </div>
        </div>
    );
}

export default App;
