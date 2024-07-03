export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

export type Product = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    images_urls: string[];
};

export type LoginData = {
    email: string;
    contrasena: string;
}
