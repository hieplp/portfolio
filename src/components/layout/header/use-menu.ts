"use client";

import { useState } from "react";

export function useMenu() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
  };
}