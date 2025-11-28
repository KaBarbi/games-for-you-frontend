import { useState } from "react";

export default function ConstructionAlert() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-3">🚧 Under construction</h2>
        <p className="text-gray-700 mb-4">
          This site is still under development. Some features may not be
          available.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
