"use client";

import {
  Card,
  CardContent,
  CardDivider,
  CardHeader,
  ColorModeToggle,
  Heading,
  Link,
  Text,
  useTheme,
} from "uioh";
import GlowEffect from "./components/glow-effect";
import { Swatch } from "./components/swatch";

export default function Page() {
  const t = useTheme();

  return (
    <>
      <GlowEffect />
      <div
        style={{
          minHeight: "100vh",
          background: t.color.bg.canvas,
          padding: 24,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "min(920px, 100%)", display: "grid", gap: 16 }}>
          <div style={{ display: "grid", gap: 6 }}>
            <Heading variant="h2">UI-OH Design System</Heading>
            <Text color="text.muted">
              Next.js + paquete uioh importado desde npm. Mismos tokens que
              Expo.
            </Text>
          </div>

          <Card>
            <CardHeader
              title="Proof of concept"
              subtitle="Same components, same tokens (Web + Native)"
              right={<ColorModeToggle />}
            />
            <CardDivider />
            <CardContent>
              <Text variant="label" color="text.brand">
                Dynamic theme
              </Text>
              <Heading variant="h3">Light/Dark sin estilos locales</Heading>
              <Text color="text.muted">
                Los componentes consumen tokens desde{" "}
                <Text variant="bodyStrong" as="span">
                  useTheme()
                </Text>
                . Cambiar modo actualiza automáticamente colores y tipografía.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Tokens" subtitle="Swatches desde el theme" />
            <CardDivider />
            <CardContent>
              <div
                style={{
                  display: "grid",
                  gap: 10,
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                }}
              >
                <Swatch label="bg.canvas" value={t.color.bg.canvas} />
                <Swatch label="bg.surface" value={t.color.bg.surface} />
                <Swatch label="text.primary" value={t.color.text.primary} />
                <Swatch label="text.brand" value={t.color.text.brand} />
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader title="Typography" subtitle="Scale + variants" />
            <CardDivider />
            <CardContent>
              <div style={{ display: "grid", gap: 10 }}>
                <Heading variant="h1">Heading h1</Heading>
                <Heading variant="h2">Heading h2</Heading>
                <Heading variant="h3">Heading h3</Heading>
                <Text>Body (default)</Text>
                <Text variant="bodyStrong">Body strong</Text>
                <Text variant="label">Label</Text>
                <Text variant="caption" color="text.muted">
                  Caption (muted)
                </Text>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardHeader title="Links" subtitle="NPM + GitHub" />
            <CardDivider />
            <CardContent>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="https://www.npmjs.com/package/uioh" external>
                  Ver paquete en npm
                </Link>
                <Link href="https://github.com/fimartinez2/uioh" external>
                  Ver repositorio
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
