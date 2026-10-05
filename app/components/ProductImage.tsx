"use client";

import { useEffect, useState } from "react";
import { getUrl } from "aws-amplify/storage";

export default function ProductImage({ path }: { path: string }) {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    getUrl({ path }).then((res) => setUrl(res.url.toString()));
  }, [path]);

  return url ? (
    <img src={url} alt="Producto" className="product-image" />
  ) : null;
}
