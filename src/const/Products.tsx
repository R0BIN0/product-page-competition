// Shoes 1
import s1_all from "../assets/shoes_1/all.png";
import s1_back from "../assets/shoes_1/back.png";
import s1_back2 from "../assets/shoes_1/back2.png";
import s1_top from "../assets/shoes_1/top.png";
import s1_under from "../assets/shoes_1/under.png";

// Shoes 12
import s2_all from "../assets/shoes_2/all.png";
import s2_back from "../assets/shoes_2/back.png";
import s2_back2 from "../assets/shoes_2/back2.png";
import s2_back3 from "../assets/shoes_2/back3.png";
import s2_top from "../assets/shoes_2/top.png";

import { IProductView, ProductView } from "./ProductsTypes";
const firstProduct: IProductView = {
    id: ProductView.NIKE_AIR_MAX_1,
    label: "Meilleure vente",
    title: "Nike Air Force 1 '07 Next Nature",
    description: "LOREM 1",
    pictures: {
        main: s1_all,
        others: [s1_back, s1_back2, s1_top, s1_under],
    },
    price: "299.99",
    reduce: {
        reduceAvailable: true,
        minus: 50,
    },
    sizes: [
        {
            size: 37,
            available: 2,
        },
        {
            size: 38,
            available: 0,
        },
        {
            size: 39,
            available: 5,
        },
        {
            size: 40,
            available: 2,
        },
        {
            size: 41,
            available: 1,
        },
        {
            size: 42,
            available: 8,
        },
        {
            size: 43,
            available: 5,
        },
    ],
};

const secondProduct: IProductView = {
    id: ProductView.NIKE_AIR_MAX_2,
    label: "La plus appréciée",
    title: "Nike Air Force 1 '07 Vapor Max",
    description: "LOREM 2",
    pictures: {
        main: s2_all,
        others: [s2_back, s2_back2, s2_back3, s2_top],
    },
    price: "180.99",
    reduce: null,
    sizes: [
        {
            size: 39,
            available: 1,
        },
        {
            size: 40,
            available: 2,
        },
        {
            size: 41,
            available: 0,
        },
        {
            size: 42,
            available: 4,
        },
        {
            size: 43,
            available: 1,
        },
        {
            size: 44,
            available: 5,
        },
        {
            size: 42,
            available: 2,
        },
    ],
};

export const ProductViews: Record<ProductView, IProductView> = {
    [ProductView.NIKE_AIR_MAX_1]: firstProduct,
    [ProductView.NIKE_AIR_MAX_2]: secondProduct,
};
