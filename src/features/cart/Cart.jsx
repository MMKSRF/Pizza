
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from "./CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "./cartSlice.js";
import EmptyCart from "./EmptyCart.jsx";


function Cart() {
  const {username} = useSelector(state => state.user.username);
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart/  >;

  return (
    <div className="px-4 py-3 ">
      <LinkButton to="/menu" >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">Your cart, {username}</h2>
        <ul className="divide-y divide-stone-300 border-b mt-3">
          {cart.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>


      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>

        <Button type="secondary" onClick={()=> dispatch(clearCart())}> Clear Car </Button>
      </div>
    </div>
  );
}

export default Cart;
