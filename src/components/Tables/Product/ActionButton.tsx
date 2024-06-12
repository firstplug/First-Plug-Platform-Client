"use client";
import { Button } from "@/common";
import { useStore } from "@/models";
import { Product } from "@/types";

type ActionType = {
  text: string;
  action: () => void;
};

interface ActionButtonProps {
  product: Product;
}
export function ActionButton({ product }: ActionButtonProps) {
  const {
    aside: { setAside },
    members: { setSelectedMemberEmail },
    products: { setSelectedProduct },
  } = useStore();
  const ActionConfig: Record<Product["status"], ActionType> = {
    Available: {
      text: "Assign To",
      action: () => {
        setAside("AssignProduct");
        setSelectedMemberEmail("");
        setSelectedProduct(product);
      },
    },
    Delivered: {
      text: "Reassign",
      action: () => {
        setAside("ReassignProduct");
        setSelectedMemberEmail(product.assignedEmail);
        setSelectedProduct(product);
      },
    },
    Deprecated: {
      text: "Deprecated",
      action: () => {},
    },
  };
  const { action, text } = ActionConfig[product.status];

  return (
    <Button onClick={action} className="rounded-md" variant="text">
      {text}
    </Button>
  );
}
