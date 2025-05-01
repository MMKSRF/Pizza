import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="rounded-full px-4 py-2 text-sm placeholder:text-slate-400 sm:w-64  sm:focus:w-72  transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:hover:bg-gray-700 disabled:hover:text-slate-800 duration-300"
      />
    </form>
  );
}

export default SearchOrder;
