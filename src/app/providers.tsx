"use client";

import { UiOhProvider } from "uioh";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UiOhProvider>{children}</UiOhProvider>;
}
