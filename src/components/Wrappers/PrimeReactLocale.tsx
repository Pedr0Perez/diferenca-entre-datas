"use client";

import adicionarTraducaoPtBrPrimeReact from "@/utils/traduction/adicionarTraducaoPtBrPrimeReact";
import { useEffect } from "react";

const PrimeReactLocale = (): React.ReactNode | null => {
  useEffect(() => {
    adicionarTraducaoPtBrPrimeReact();
  }, []);

  return null;
};

export default PrimeReactLocale;
