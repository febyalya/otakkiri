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
      name: 'Banana Pancake',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1wUSrymFUXwP5rl7GXYgwcC0tZSkRC5-O',
      imageAlt: "Otakk Kirii.",
      price: '15.300',
      
    },

    {
      id: 1,
      name: 'Garlic Bred',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1LHX-jUW4GXLbha2DTfWfOASs6aYgQkN8',
      imageAlt: "Otakk Kirii.",
      price: '15.300',
      
    },

    {
      id: 1,
      name: 'Macaron',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=12SEufffGbJGbN0528hAz3h5zdc58nz7b',
      imageAlt: "Otakk Kirii.",
      price: '16.000',
      
    },

    {
      id: 1,
      name: 'Croissant',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=10PYMsFzOKaAb80oGppiCsfCE5nM_1G9b',
      imageAlt: "Otakk Kirii.",
      price: '18.700',
      
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
          <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Menu Appetaizer</h2>
  
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
  