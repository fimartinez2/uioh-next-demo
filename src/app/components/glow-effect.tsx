import { useTheme } from "uioh";

const GlowEffect = () => {
  const t = useTheme();
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        background: `
      radial-gradient(
        600px circle at 30% 20%,
        ${t.color.text.brand}22,
        transparent 60%
      ),
      radial-gradient(
        500px circle at 70% 60%,
        ${t.color.text.brand}18,
        transparent 65%
      )
    `,
        zIndex: 0,
      }}
    />
  );
};

export default GlowEffect;
