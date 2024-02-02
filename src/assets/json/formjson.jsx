import Glass1 from '../images/glass1.png';
import Glass2 from '../images/glass2.png';
import Glass3 from '../images/glass3.png';
import Glass4 from '../images/glass4.png';
import Glass5 from '../images/glass5.jpg';
import Glass6 from '../images/glass6.jpg';
import Glass7 from '../images/glass7.jpg';
import Glass8 from '../images/glass8.jpg';

export const LoginFromInputs = [
    {
        title: "Username",
        key: "username",
        required: true,
        type: "text"
    },
    {
        title: "Password",
        key: "password",
        required: true,
        type: "text"
    }
]

export const SidebarMenu = [
    {
        title: "Product List",
        key: "products",
        navigateTo: "/products"

    },
    {
        title: "Profile Page",
        key: "profile",
        navigateTo: "/profile"

    },
    {
        title: "Logout",
        key: "logout",
        navigateTo: "/"

    }
]

export const ProductsList = [
    {
        brandName: "Ray-ban",
        description: "Round metal",
        price: "11,890",
        src:Glass1,
    },
    {
        brandName: "Ray-ban",
        description: "Clubmaster Classic",
        price: "11,090",
        src:Glass2,
    },
    {
        brandName: "Ray-ban",
        description: "Original Wayfarer Classic",
        price: "20,390",
        src:Glass3,
    },
    {
        brandName: "Ray-ban",
        description: "Hexagonal",
        price: "10,390",
        src:Glass4,
    },
    {
        brandName: "Carrera",
        description: "Carrera 269",
        price: "89,000",
        src:Glass5,
    },
    {
        brandName: "Carrera",
        description: "Carrera 284",
        price: "75,000",
        src:Glass6,
    },
    {
        brandName: "Lee Cooper",
        description: "Wayfarer Sunglasses",
        price: "2,399",
        src:Glass7,
    },
    {
        brandName: "Vincent Chase",
        description: "Aviator Sunglasses",
        price: "4,679",
        src:Glass8,
    }
]