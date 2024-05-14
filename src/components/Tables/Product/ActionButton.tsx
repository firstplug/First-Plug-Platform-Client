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
  } = useStore();
  const ActionConfig: Record<Product["status"], ActionType> = {
    Available: {
      text: "Assing To",
      action: () => {
        setAside("AssingProduct");
        setSelectedMemberEmail("");
      },
    },
    Delivered: {
      text: "Reassign",
      action: () => {
        setAside("ReassingProduct");
        setSelectedMemberEmail(product.assignedEmail);
      },
    },
  };
  const { action, text } = ActionConfig[product.status];

  return (
    <Button onClick={action} className="rounded-md" variant="text">
      {text}
    </Button>
  );
}
