import { IProductView, ProductView } from "./ProductsTypes";
const firstProduct: IProductView = {
    id: ProductView.NIKE_AIR_MAX_1,
    color: "red",
};

const secondProduct: IProductView = {
    id: ProductView.NIKE_AIR_MAX_2,
    color: "black",
};

const thirdProduct: IProductView = {
    id: ProductView.NIKE_AIR_MAX_3,
    color: "PURPLE",
};

export const ProductViews: Record<ProductView, IProductView> = {
    [ProductView.NIKE_AIR_MAX_1]: firstProduct,
    [ProductView.NIKE_AIR_MAX_2]: secondProduct,
    [ProductView.NIKE_AIR_MAX_3]: thirdProduct,
};
