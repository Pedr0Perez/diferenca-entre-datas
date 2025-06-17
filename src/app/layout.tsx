import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "../style/main.css";

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
