"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import ProductImage from "../components/ProductImage";

const client = generateClient<Schema>();

export default function Productos() {
  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);

  useEffect(() => {
    const sub = client.models.Product.observeQuery().subscribe({
      next: ({ items }) => setProducts([...items]),
      error: (err) => console.error(err),
    });
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Productos</h1>

      {products.length === 0 && <p>Aún no hay productos.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}
          >
            {p.imageKey && <ProductImage path={p.imageKey} />}
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>${p.price.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}