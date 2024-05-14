import { IoIosMenu } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

function SmallNavBar({setShowCart} : any) {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <IoIosMenu size={30} />
            <BsSearch size={24} />
          </div>
          <h1 className="text-4xl">MdEcom</h1>
          <div className="flex gap-4 text-[30px]">
            <AiOutlineUser />
            <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallNavBar;
