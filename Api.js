// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import Navbar from './components/Navbar'

// export default function Example() {
//     const [product, setProduct] = useState([]);
//     const getProduct = () => {
//         Axios.get(`http://localhost/northwind/api/list/products`)
//         .then(res => {
//         const data = res.data;
//         setProduct(data.products)
//         })
//         .catch(function (error) {
//         // handle error
//         console.log(error);
//         })
        
//         }
//         useEffect(() => {
//             getProduct()
//         }, []);
//         {product.map(products => (
//             <>
//             <Navbar />
//             <a key={product.id} href={product.href} className="group">
//             <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg
//             overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            
//             <img
//             // src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'
//             // alt='Person using a pen to cross a task off a productivity paper card.'
//             src={products.url}
//             // alt={products.ProductName}
//             className="w-full h-full object-center object-cover group-hover:opacity-75"
//             />
//             </div>
//             <h3 className="mt-4 text-sm text-gray-700">{products.ProductName}</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">{products.UnitPrice}</p>
//             </a>
//             </>
//             ))}
//     }
import React, { Component} from 'react';
import Axios from 'axios';

export default class App extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        Axios.get('https://reactnative.dev/movies.json')
        .then(res => {
            const movies = res.data.movies;
            this.setState({ movies });
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        })
    }

    render() {
        return (
            <ul>
                {this.state.movies.map(movies => <li>{movies.title}</li>)}
            </ul>
        );
    }
}
