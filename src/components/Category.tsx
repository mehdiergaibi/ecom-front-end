import CategoryCard from "./CategoryCard";
const categories = [
  {
    id: 1,
    category: "Men's Clothing",
    image:
      "https://imgs.search.brave.com/mlbVmt4yCy1zY0O8h3qEE5uXZPjI_OZX6IxuhOn9onA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDc2ODA0MzQ1Njct/NTczOWM4MGJlMWFj/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/MWxiaVV5TUdaaGMy/aHBiMjU4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    numberOfProducts: 500,
  },
  {
    id: 2,
    category: "Women's Clothing",
    image:
      "https://imgs.search.brave.com/ZrD1lNwVh5inYk2YGrfe9bmsVfPbpdPKECJZXILacIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b21lbi1jbG90/aGVzLW91dGZpdC1o/YW5nZXItY29uc3Vt/ZXItc3R5bGUtc2hv/cHBpbmdfOTcyNDc4/LTEwOTcxLmpwZz9z/aXplPTYyNiZleHQ9/anBn",
    numberOfProducts: 700,
  },
  {
    id: 3,
    category: "Shoes",
    image:
      "https://imgs.search.brave.com/WOzmQg47yABEdgeRUej4PNdvnDJ-keqsKBFfCFByRT4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MDExNzYzL3Bob3Rv/L3Nob2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1peVJn/aWR6eDN6cWNGX1hT/UzlrY3JLYW0xaXkw/VVg5bE1GTUlCS3c3/WDJZPQ",
    numberOfProducts: 400,
  },
  {
    id: 4,
    category: "Accessories",
    image:
      "https://imgs.search.brave.com/6pbXvJJFD-zrYE-JUKJEiclishgKKikEv-5jIc2HL38/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9H/LzQyL1NML0p1bmUv/WENNX01hbnVhbF8x/NDQzMjczXzQ3OTgw/NzZfNDQweDQ0MF8y/WC5qcGc",
    numberOfProducts: 300,
  },
  {
    id: 5,
    category: "Electronics",
    image:
      "https://imgs.search.brave.com/vfFwUwqYZbCviwBxb29oYuqV9TM0oE_m8riOxwUpLs8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NTYxNjM3My9waG90/by9ibHVldG9vdGgt/aGVhZHBob25lcy13/aXRoLW1pYy1mb3It/bW9iaWxlLXBob25l/cy10YWJsZXRzLWxh/cHRvcHMtdG9wLXZp/ZXctY29weS1hcmVh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zVVh1bUtSNjhK/S3JOOFJqUDNycUlH/dEs1VTk4TlhDUVZl/MlVjSkhpWHRRPQ",
    numberOfProducts: 1200,
  },
  {
    id: 6,
    category: "Home & Kitchen",
    image: "https://imgs.search.brave.com/7YTl2pfIxppF0i3vN4IxmMhgZmy3E5ffuDLS1A_dFNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naGsw/MTAxMjNob21lbWlu/aWZlYXR1cmUtMDA1/LTY0MTQ4NjRiYzFl/ZjAucG5nP2Nyb3A9/MS4wMHh3OjAuNzgz/eGg7MCwwLjIxN3ho/JnJlc2l6ZT02NDA6/Kg",
    numberOfProducts: 900,
  },
  {
    id: 7,
    category: "Sports & Outdoors",
    image: "https://imgs.search.brave.com/6D_38tBAFewMc_yzWU3d_IDVH6B9M1drqWBYtj7CRfM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFVcGVVeXAxMEwu/anBn",
    numberOfProducts: 600,
  },
  {
    id: 8,
    category: "Beauty & Personal Care",
    image: "https://imgs.search.brave.com/K2AbL6pS16OoFxE-bxZ7lxHInygFnwcP52548nly9OQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nb29w/LWltZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDUv/c2tpbmNhcmUtMS5q/cGc",
    numberOfProducts: 350,
  },
];

function Category() {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((categorie) => (
          <CategoryCard
            key={categorie.id}
            img={categorie.image}
            name={categorie.category}
            count={categorie.numberOfProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
