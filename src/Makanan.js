/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar' ;
const products = [
    {
      id: 1,
      name: 'Aglio Olio',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1GE-iTMnF95IVZfcV5rOe_L69YHav643P',
      imageAlt: "Otakk Kirii.",
      price: '27.500',
 
    },

    {

    id: 2,
    name: 'Egg Roll Soup',
    href: '#',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1zQ3AKQBm9LCtPT3l3LKP3huoH97xdFMn',
    imageAlt: "Otakk Kirii.",
    price: '25.500',

    },

    {
        
    id: 3 ,
    name: 'Spicy Pasta',
    href: '#',
    imageSrc: 'https://drive.google.com/uc?export=view&id=14nVF46kxT5bFdxwEoG-LuB4psFOBe7zQ ',
    imageAlt: "Otakk Kirii.",
    price: '25.500',

    },
       



    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
          <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Menu Makanan</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  