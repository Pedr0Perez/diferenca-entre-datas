import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "../style/main.css";
import "../style/colors-light.css";
import "../style/custom-inputs-style.css";
import "../style/custom-button-style.css";
import "primeicons/primeicons.css";

export const metadata = {
  title: "Diferença entre duas datas",
  icons: {
    icon: "/sis-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="god">{children}</body>
    </html>
  );
}
