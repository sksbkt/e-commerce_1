import { PageHeader } from "@/app/admin/_commponents/PageHeader";
import ProductForm from "@/app/admin/products/_components/ProductForm";
import db from "@/db/db";
import React from "react";

async function EditProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({ where: { id } });

  return (
    <>
      <PageHeader>Edit product</PageHeader>
      <ProductForm product={product} />
    </>
  );
}

export default EditProductPage;
