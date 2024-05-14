function Banner() {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
            <img className="hover:scale-105 transition-transform" src="https://media.cnn.com/api/v1/images/stellar/prod/mate-the-label-sustainable-activewear-cnnu.jpg?q=w_1110,c_fill/f_webp" />
        </div>
        <div className="overflow-hidden rounded-lg">
            <img className="hover:scale-105 transition-transform" src="https://imgs.search.brave.com/V8es9k-q3E9O91TEMr6nSXkGWGvTq1R2NavWjdUbeQc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wYXJz/ZWx5L21lbnMtc3By/aW5nLWZhc2hpb24t/ZXNzZW50aWFscy1s/ZWFkLWNubnUuanBl/Zz9jPTE2eDkmcT1o/XzQzOCx3Xzc4MCxj/X2ZpbGw" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
