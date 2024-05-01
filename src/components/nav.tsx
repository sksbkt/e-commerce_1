"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary text-primary-foreground flex justify-center px-4">
      {children}
    </div>
  );
}
// ?    ComponentProps<typeof Link> we are going to get all of the props associated with next/Link
// ?    with Omit<T,K> we accept T types but dont accept K
export function NavLink(props: Omit<ComponentProps<typeof Link>, "ClassName">) {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        // ? if we are in the path that we are pointing to it will add these styles
        pathName === props.href && "bg-background text-foreground",
      )}
    />
  );
}
