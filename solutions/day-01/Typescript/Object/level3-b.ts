// 2 - Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// 3 - The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// 4 - Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    isLoggedIn: boolean;
}

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]


function findUser(users: User[], identifier: string): User | undefined {
    return users.find(user => user.username === identifier || user.email === identifier);
}

function signUp(newUser: User, users: User[]): string {
    const existingUser = findUser(users, newUser.username);
    if (existingUser) {
        return 'User already has an account.';
    }
    users.push(newUser);
    return 'User successfully added.';
}

function signIn(identifier: string, password: string, users: User[]): string {
    const user = findUser(users, identifier);
    if (user && user.password === password) {
        user.isLoggedIn = true;
        return 'Login successful.';
    }
    return 'Invalid credentials.';
}


interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    ratings: { userId: string; rate: number }[];
    likes: string[];
}


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

function rateProduct(productId: string, userId: string, rating: number, products: Product[]): void {
    const product = products.find(prod => prod._id === productId);
    if (product) {
        product.ratings.push({ userId, rate: rating });
    }
}

function averageRating(productId: string, products: Product[]): number {
    const product = products.find(prod => prod._id === productId);
    if (product && product.ratings.length > 0) {
        const totalRatings = product.ratings.reduce((total, rating) => total + rating.rate, 0);
        return totalRatings / product.ratings.length;
    }
    return 0;
}

function likeProduct(productId: string, userId: string, products: Product[]): void {
    const product = products.find(prod => prod._id === productId);
    if (product) {
        const index = product.likes.indexOf(userId);
        if (index === -1) {
            product.likes.push(userId); // Like se ainda não tiver sido curtido
        } else {
            product.likes.splice(index, 1); // Remove like se já tiver sido curtido
        }
    }
}