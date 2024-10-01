"use client";

import * as React from "react";
import { ThemeSwitchProvider } from "@/context/theme-switch";
import { ClientThemeWrapper } from "@/context/client-theme-wrapper";
import { ToastProvider } from "@/context/ToastProvider";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeSwitchProvider>
      <ClientThemeWrapper>
        <ToastProvider>{children}</ToastProvider>
      </ClientThemeWrapper>
    </ThemeSwitchProvider>
  );
}
