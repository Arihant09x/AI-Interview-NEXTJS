"use client";

import { toast } from "sonner";
import { Button } from "@/Components/ui/button";
import Link from "next/link";

interface ToastButtonProps {
  href: string;
  className: string;
  message: string;
  label: string;
}

const ToastButton = ({ href, message, label, className }: ToastButtonProps) => {
  const handleClick = () => {
    toast(message); // Show the toast message
  };

  return (
    <Button className={className} onClick={handleClick}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default ToastButton;
