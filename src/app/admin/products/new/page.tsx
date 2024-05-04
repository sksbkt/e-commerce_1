import { PageHeader } from "@/app/admin/_commponents/PageHeader";
import ProductForm from "@/app/admin/products/_components/ProductForm";
import React from "react";

function NewProductPage() {
  return (
    <>
      <PageHeader>Add product</PageHeader>
      <ProductForm />
    </>
  );
}

export default NewProductPage;
