interface propsType {
    img: string;
    name: string;
    price: number
}
export const CartProduct = ({ img, name, price } : propsType) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img className="h-[100px]" src={img} alt={name} />
            <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-600">1 x {price}</p>
            </div>
        </div>
    </div>
  )
}
