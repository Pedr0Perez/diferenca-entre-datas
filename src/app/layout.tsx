import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "../style/main.css";
import "../style/colors-light.css";
import "../style/custom-inputs-style.css";
import "../style/custom-button-style.css";
import "primeicons/primeicons.css";
import PrimeReactLocale from "@/components/Wrappers/PrimeReactLocale";
import InitialLoading from "@/components/Global/InitialLoading";
import LocalStorageCalendar from "@/components/Wrappers/LocalStorageCalendar";

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
      <PrimeReactLocale />
      <LocalStorageCalendar />
      <body className="god">
        <InitialLoading />
        {children}
      </body>
    </html>
  );
}
