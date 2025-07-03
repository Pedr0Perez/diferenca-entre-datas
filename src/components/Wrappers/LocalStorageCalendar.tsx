"use client";

import getLocalStorage from "@/utils/localStorage/getLocalStorage";
import setLocalStorage from "@/utils/localStorage/setLocalStorage";
import { useEffect } from "react";

const LocalStorageCalendar = (): React.ReactNode | null => {
  useEffect(() => {
    const item = getLocalStorage("calendar");

    if (item === null) {
      setLocalStorage("calendar", "0");
    }
  }, []);

  return null;
};

export default LocalStorageCalendar;
