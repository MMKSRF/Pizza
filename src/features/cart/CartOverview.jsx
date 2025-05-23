import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getTotalCartPrice, getTotalCartQuantity} from "./cartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)


  if (!totalCartQuantity) return null;

  return (
    <div
      className=" bg-slate-800 text-slate-200 p-4
                     uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between"
    >
      <p className="text-slate-300 space-x-4 font-semibold sm:space-x-4">
        <span className="  text-sky-200">{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
