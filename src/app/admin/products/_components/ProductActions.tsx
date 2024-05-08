"use client";
import {
  deleteProduct,
  toggleProductAvailability,
} from "@/app/admin/_actions/products";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function ActiveToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          toggleProductAvailability(id, !isAvailableForPurchase);
          // ? refreshing page to update changes
          // * not the best but the easier since its admin page and user wont see it
          router.refresh();
        })
      }
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled?: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={disabled || isPending}
      onClick={() =>
        startTransition(async () => {
          deleteProduct(id, !disabled);
          router.refresh();
        })
      }
    >
      Delete
    </DropdownMenuItem>
  );
}
