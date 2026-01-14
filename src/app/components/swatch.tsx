import { Text, useTheme } from "uioh";

export function Swatch({ label, value }: { label: string; value: string }) {
  const t = useTheme();
  return (
    <div
      style={{
        borderRadius: 14,
        border: `1px solid ${t.color.border.default}`,
        background: t.color.bg.surface,
        padding: 12,
        display: "grid",
        gap: 6,
      }}
    >
      <div
        style={{
          height: 28,
          borderRadius: 10,
          background: value,
          border: `1px solid ${t.color.border.default}`,
        }}
      />
      <Text variant="label">{label}</Text>
      <Text variant="caption" color="text.muted">
        {value}
      </Text>
    </div>
  );
}
