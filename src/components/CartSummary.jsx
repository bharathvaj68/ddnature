export default function CartSummary() {
  const cartItems = [
    { name: "Peperomia Ginny", size: "500ml", price: 25, qty: 1 },
    { name: "Majesty Palm", size: "1L", price: 52, qty: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Order</h3>

      <ul className="space-y-3 mb-6">
        {cartItems.map((item, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>
              {item.name} ({item.size})
            </span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between font-semibold text-sm border-t pt-2">
        <span>Total</span>
        <span>${total.toFixed(10)}</span>
      </div>
    </div>
  );
}
