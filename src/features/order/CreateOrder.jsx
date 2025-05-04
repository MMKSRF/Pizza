import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import {useState} from 'react'
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import {useDispatch, useSelector} from "react-redux";
import {clearCart, getCart, getTotalCartPrice} from "../cart/cartSlice.js";
import EmptyCart from "../cart/EmptyCart.jsx";
import store from "../../store.js";
import { formatCurrency } from '../../utils/helpers.js';
import {fetchAddress} from "../user/userSlice.js";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const {username,status: addressStatus, position, address, error:errorAddress} = useSelector(state => state.user);
    const [withPriority, setWithPriority] =useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice  =  withPriority ? totalCartPrice * 0.2  : 0
  const totalPrice = totalCartPrice + priorityPrice


  const isLoadingAddress = addressStatus === 'loading';


  const dispatch = useDispatch();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  // const [withPriority, setWithPriority] = useState(false);

  const formError = useActionData();
  // console.log(formError);
  // const cart = fakeCart;


  if (!cart.length) return <EmptyCart />;
  return (
    <div className="py-4 px-6 ">
      <h2 className="text-xl mb-8 font-semibold">Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:itens-center ">
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username.username}
            type="text"
            name="customer"
            required
            className="input"
          />
        </div>

        <div  className="mb-5 flex gap-2 flex-col sm:flex-row sm:itens-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="sm:basis-full">
            <input
              type="tel"
              name="phone"
              required
              className="input"
            />
          {formError?.phone && (
            <p style={{ color: 'red' }} className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-bl-xl">{formError.phone}</p>
          )}
          </div>
        </div>

        <div  className="mb-5 flex gap-2 flex-col sm:flex-row sm:itens-center relative ">
          <label className="sm:basis-40">Address</label>
          <div className="sm:basis-full">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input"
            />
            {addressStatus ==="error" && (
                <p style={{ color: 'red' }} className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-bl-xl">{errorAddress}</p>
            )}

          </div>
          {!position.latitude && !position.longitude && <span className='absolute right-[5px] z-50 top-[5px]'>


           <Button disabled={isLoadingAddress} type='small' onClick={(e) => {
             e.preventDefault()
             dispatch(fetchAddress())
           }}>Get position</Button>

         </span>}
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-sky-500 border-2 rounded border-slate-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          value={withPriority}
          onChange={(e) => setWithPriority(e.target.checked)}
          />


          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.latitude && position.longitude ?  `${position?.latitude} ${position?.longitude}` : ""} />

          <Button
            disabled={isSubmitting}
            type='primary'
          >
            {isSubmitting ? 'placing order...' : `Order now from ${formatCurrency(totalCartPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}






export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // console.log(data)

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  // console.log(order);
  // console.log(newOrder);

  const error = {};
  console.log(order);


  if (! isValidPhone(order.phone)) {
    error.phone = 'Invalid phone number';
  }

  if (Object.keys(error).length > 0) {
    return error;
  }

  // console.log(customer, phone, address, priority);
  const newOrder = await createOrder(order);
  // console.log("store", store);


  store.dispatch(clearCart());


  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
