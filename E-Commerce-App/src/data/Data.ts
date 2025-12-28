type DataType = {
    img: string;
    title: string;
    weight: string;
    category: string;
    price: number;
}

const DataList: DataType[] = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BLqQolWQOlU1FS70r_39fN9sWVKEQ0W04Y5Ts7HEPclYd20RYnCgN9-peIzy-xfH5BXSfXVaM1VDGcfU7N_STz65ys9aX6YDv8TluZ8&s=10",
        title: "Tamarind සියඹලා",
        weight: "100g",
        category: "spices medicine",
        price: 1.99,
    },
    {
        img: "https://thottamfarmfresh.com/wp-content/uploads/2022/07/Ceylon-cinnamon.webp",
        title: "cinnamon කුරුඳු",
        weight: "100g",
        category: "spices",
        price: 2.99,
    },
    {
        img: "https://cdn.lakpura.com/images/LK94007685-04-E.JPG",
        title: "Mountain Knotgrass පොල්පලා",
        weight: "100g",
        category: "medicine",
        price: 1.99,
    },
];


export { type DataType, DataList }; 