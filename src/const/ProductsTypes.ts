/* eslint-disable no-unused-vars */
export enum ProductView {
    NIKE_AIR_MAX_1 = 0,
    NIKE_AIR_MAX_2 = 1,
}
export interface IProductView {
    id: ProductView;
    label: string;
    title: string;
    description: string;
    pictures: Pictures;
    price: string;
    reduce: Discount | null;
    sizes: Sizes[];
}

type Pictures = {
    main: string;
    others: string[];
};

type Discount = {
    reduceAvailable: boolean;
    minus: number;
};

type Sizes = {
    size: number;
    available: number;
};
