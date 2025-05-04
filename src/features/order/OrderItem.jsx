import { formatCurrency } from '../../utils/helpers.js';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { name, quantity, totalPrice } = item;
console.log("ingredients", ingredients);
console.log("isLoadingIngredients", isLoadingIngredients);
  return (
    <li className="py-3 ">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
        <p className='text-sm capitalize italic bg-sky-200'>{isLoadingIngredients ? "loading..." : ingredients?.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
