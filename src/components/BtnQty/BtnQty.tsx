// Global
import React, { useState } from "react";

// Styles
import "./BtnQty.css";

// Types
import { BtnQtyState, UpdateQtyAction } from "./BtnQtyTypes";

const BtnQty = () => {
    const [data, setData] = useState<BtnQtyState>({
        qty: 1,
    });

    const handleUpdateQty = (action: UpdateQtyAction) => {
        let newState = { ...data };

        switch (action) {
            case 0:
                if (newState.qty === 1) return;

                newState.qty = newState.qty - 1;
                break;

            case 1:
                newState.qty = newState.qty + 1;
                break;

            default:
                break;
        }

        setData(newState);
    };

    return (
        <div className="btnQty-container">
            <button onClick={() => handleUpdateQty(0)}>-</button>
            <span className="product-page-qty">{data.qty}</span>
            <button onClick={() => handleUpdateQty(1)}>+</button>
        </div>
    );
};

export default BtnQty;
