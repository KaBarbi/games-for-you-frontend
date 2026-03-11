interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelector({ quantity, setQuantity }: Props) {
  function increase() {
    setQuantity((q) => q + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 text-sm">Quantity:</span>

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={decrease}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
        >
          -
        </button>

        <span className="px-4">{quantity}</span>

        <button
          onClick={increase}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
}
