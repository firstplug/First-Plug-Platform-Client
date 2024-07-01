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
    products,
  } = useStore();

  const handleAssignAction = async () => {
    setAside("AssignProduct");
    setSelectedMemberEmail("");
    await products.getProductForAssign(product._id);
  };

  const handleReassignAction = async () => {
    setAside("ReassignProduct");
    setSelectedMemberEmail(product.assignedEmail);
    await products.getProductForReassign(product._id);
  };

  const ActionConfig: Record<Product["status"], ActionType> = {
    Available: {
      text: "Assign To",
      action: handleAssignAction,
    },
    Delivered: {
      text: "Reassign",
      action: handleReassignAction,
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
