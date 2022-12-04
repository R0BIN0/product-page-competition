// Shoes 1
import s1_all from "../assets/shoes_1/all.png";
import s1_back from "../assets/shoes_1/back.png";
import s1_back2 from "../assets/shoes_1/back2.png";
import s1_top from "../assets/shoes_1/top.png";
import s1_under from "../assets/shoes_1/under.png";

// Shoes 2
import s2_all from "../assets/shoes_2/all.png";
import s2_back from "../assets/shoes_2/back.png";
import s2_back2 from "../assets/shoes_2/back2.png";
import s2_back3 from "../assets/shoes_2/back3.png";
import s2_top from "../assets/shoes_2/top.png";

// Shoes 3
import s3_all from "../assets/shoes_3/all.png";
import s3_back from "../assets/shoes_3/back.png";
import s3_back2 from "../assets/shoes_3/back2.png";
import s3_back3 from "../assets/shoes_3/back3.png";
import s3_top from "../assets/shoes_3/top.png";

import { IProductView, ProductView } from "./ProductsTypes";
const firstProduct: IProductView = {
    id: ProductView.NIKE_1,
    label: "Meilleure vente",
    title: "Nike Air Force 1 '07 Next Nature",
    description:
        "Place au jeu. Confectionnée avec au moins 20 % de son poids en matières recyclées, elle revisite une légende de l'histoire des sneakers avec un cuir synthétique.",
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
    id: ProductView.NIKE_2,
    label: "La plus appréciée",
    title: "Nike Air Max Plus",
    description:
        "Revendiquez votre côté rebelle avec votre Nike Air Max Plus, un modèle Air novateur qui offre une stabilité optimale et un amorti exceptionnel. ",
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
            size: 45,
            available: 2,
        },
    ],
};

const thirdProduct: IProductView = {
    id: ProductView.NIKE_3,
    label: "Parfaite pour Dunker",
    title: "Nike Dunk High Retro",
    description:
        "Rendez hommage à l’histoire de la Dunk avec une version revisitée du modèle montant d'origine. Reprenant la silhouette, le look et les sensations qui ont fait sa renommée, elle affiche un style rétro tout en conservant le confort familier que vous aimez.",
    pictures: {
        main: s3_all,
        others: [s3_back, s3_back2, s3_back3, s3_top],
    },
    price: "119.99",
    reduce: {
        reduceAvailable: true,
        minus: 25,
    },
    sizes: [
        {
            size: 39,
            available: 0,
        },
        {
            size: 40,
            available: 0,
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
            available: 2,
        },
        {
            size: 44,
            available: 5,
        },
        {
            size: 45,
            available: 1,
        },
    ],
};

export const ProductViews: Record<ProductView, IProductView> = {
    [ProductView.NIKE_1]: firstProduct,
    [ProductView.NIKE_2]: secondProduct,
    [ProductView.NIKE_3]: thirdProduct,
};
