import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <button className="bg-green-900 text-white w-full py-3 rounded-md hover:bg-green-800 mt-6">
            Proceed to Payment
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div className="bg-gray-50 p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Order</h3>
        <ul className="space-y-3 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm border-b pb-2">
              <span>
                {item.name} ({item.selectedSize})
              </span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 ml-2 text-xs">Remove</button>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-semibold text-sm border-t pt-2">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </section>
  );
}
