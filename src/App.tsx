import "./App.css";

function App() {
    return (
        <div className="product-page-global-container">
            <div className="product-page-container">
                <div className="product-page-left">
                    <div className="product-page-title-container">
                        <span>Meilleure vente</span>
                        <h1>Nike Air Force 1 '07 Next Nature</h1>
                    </div>

                    <div className="product-page-size-container">
                        <div className="product-page-size-btns-container">
                            <button>left</button>
                            <button>right</button>
                        </div>
                        <div className="product-page-size-card-container">
                            <div className="product-page-size-card">
                                <div className="size-card-status"></div>
                                <p className="size-card-number">37</p>
                                <p className="size-card-left">2 restantes</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-page-description-container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a repellendus dolore explicabo
                            in facilis. Commodi, magnam. Distinctio, fugit quaerat.
                        </p>
                    </div>

                    {/* Description crumb */}

                    <div className="product-page-price-container">
                        <div>
                            <span>-50%</span>
                            <p className="product-page-price">112.99€</p>
                            <p className="product-page-price-reduce">56.45€</p>
                        </div>
                        <div>
                            <button>-</button>
                            <span className="product-page-qty">2</span>
                            <button>+</button>
                        </div>
                    </div>
                    <button className="product-page-add-btn">Ajouter au panier</button>
                </div>
                <div className="product-page-right">
                    <div className="product-page-slider-container">
                        <button>left</button>
                        <button>right</button>
                    </div>

                    <img className="product-page-main-picture" src="" alt="" />

                    <div className="product-page-pictures-container">
                        <div className="product-page-second-picture-box">
                            <img src="" alt="" />
                        </div>
                        <div className="product-page-second-picture-box">
                            <img src="" alt="" />
                        </div>
                        <div className="product-page-second-picture-box">
                            <img src="" alt="" />
                        </div>
                        <div className="product-page-second-picture-box">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
