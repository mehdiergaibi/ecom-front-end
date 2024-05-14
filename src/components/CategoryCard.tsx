interface propsType {
  img: string;
  name: string;
  count: number;
}
function CategoryCard({ img, name, count }: propsType) {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-x1">{name}</h3>
          <p className="text-gray-500">{count}</p>
        </div>
        <img src={img} className="w-[100px] h-[100px] rounded-full" />
      </div>
    </div>
  );
}

export default CategoryCard;
