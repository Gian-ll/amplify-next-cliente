"use client";

import { useState } from "react";
import { generateClient } from "aws-amplify/data";
import { uploadData } from "aws-amplify/storage";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export default function AgregarProducto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setMessage("");

    try {
      let imageKey: string | undefined;

      if (file) {
        const path = `product-images/${Date.now()}-${file.name}`;
        await uploadData({ path, data: file }).result;
        imageKey = path;
      }

      const { errors } = await client.models.Product.create({
        name,
        description,
        price: Number(price),
        imageKey,
      });

      if (errors) throw new Error(errors[0].message);

      setMessage("✅ Producto agregado");
      setName("");
      setDescription("");
      setPrice("");
      setFile(null);
      form.reset();
    } catch (err) {
      console.error(err);
      setMessage("❌ Error al agregar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1 className="page-title">Agregar producto</h1>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        min="0"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button type="submit" disabled={loading} className="button">
        {loading ? "Guardando..." : "Guardar producto"}
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}