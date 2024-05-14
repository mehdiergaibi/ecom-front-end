import ProductCard from "./ProductCard";

const popularClothes = [
    {
      id: 1,
      img: "https://content.moss.co.uk/images/extraextralarge/966853750_01.jpg",
      name: "Men's Slim Fit Shirt",
      price: 39.99
    },
    {
      id: 2,
      img: "https://imgs.search.brave.com/OjuuMvtR9LdDrP8YO2KaL-GnVNpDjOaObQfcjjAzdoA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjQx/NDgyNjQ4LUdTNDE5/VEZULUsxODQtRjIx/LUFfMV8yMTU0Xzc2/OHgucHJvZ3Jlc3Np/dmUuanBnP2Nyb3A9/MXh3OjF4aDtjZW50/ZXIsdG9wJnJlc2l6/ZT05ODA6Kg",
      name: "Women's High-Waisted Jeans",
      price: 49.99
    },
    {
      id: 3,
      img: "https://content.moss.co.uk/images/extraextralarge/966855130_01.jpg",
      name: "Men's Polo Shirts",
      price: 29.99
    },
    {
      id: 4,
      img: "https://imgs.search.brave.com/v55QEm3y8XPZ3crNGNfiIh7yeN8Oa-av8Q9qNN0HV5Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yb21h/bnMtY2RuLnJsYWIu/bmV0L2ltYWdlcy9l/eHRyYWxhcmdlL2E3/MmQxN2RiLTMyYjUt/NDJjMy1hMGMxLTFk/N2FjYzg4MmUyNC5q/cGc",
      name: "Women's Floral Dress",
      price: 59.99
    },
    {
      id: 5,
      img: "https://imgs.search.brave.com/Unz41bx539ImADSG4jtuoceLT0TlFl_FcuSO32E0j0E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm1vc3MuY28u/dWsvaW1hZ2VzL2V4/dHJhZXh0cmFsYXJn/ZS85NjY4MTM3MzBf/MDIuanBn",
      name: "Men's Casual Chinos",
      price: 34.99
    }
  ];
  
function Popular() {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2x1">Popular</h3>
          <p className="text-gray-600 mt-2">
            Explore our curated selection of top-rated products loved by our
            customers.
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Men</button>
          <button className="text-gray-600 hover:text-accent">Women</button>
          <button className="text-gray-600 hover:text-accent">Kids</button>
        </div>
      </div>
       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            {
        popularClothes.map( (clothe) => <ProductCard
            key={clothe.id}
            img={clothe.img}
            name={clothe.name}
            price={clothe.price}
        /> )
      }
      </div> 
      
    </div>
  );
}

export default Popular;
