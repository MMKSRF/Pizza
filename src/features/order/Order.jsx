// Test ID: IIDSAT

import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useLoaderData } from 'react-router-dom';
import OrderItem from "./OrderItem.jsx";

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className='space-x-2 '>
          {priority && <span className='bg-red-500  text-red-50 rounded-full py-1 px-3 text-sm font-semibold uppercase tracking-wide'>Priority</span>}
          <span className='bg-green-500 text-green-50 rounded-full py-1 px-3 text-sm font-semibold uppercase tracking-wide' >{status} order</span>
        </div>
      </div>

      <div  className="flex items-center justify-between flex-wrap gap-2     space-y-2 bg-sky-200 px-6 py-5">
        <p className='font-medium'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs text-sky-500'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      {/*className='space-y-2 bg-stone-200 px-6 py-5 '*/}

      <ul className='divide-y divide-sky-200 border-b border-t' >
        {cart.map(item=><OrderItem key={item.key} item={item} />)}
      </ul>
      <div className=" space-y-2 px-6  bg-sky-200 py-5 ">
        <p className="text-sm font-medium text-sky-600 ">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-sky-600 " >Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  return order; // Uncommenting the return statement
}

export default Order;

/*
const order = {
  id: 'ABCDEF',
  customer: 'Jonas',
  phone: '123456789',
  address: 'Arroios, Lisbon , Portugal',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: 'Diavola',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: 'Romana',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
}
*/
