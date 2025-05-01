import { formatCurrency } from '../../utils/helpers.js';
import Button from "../../ui/Button.jsx";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import {useSelector} from "react-redux";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  // const currentQuantity = useSelector(getCurrentQuantity)

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
