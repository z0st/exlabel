"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ab6986c6-c9a0-440c-a591-ac7e1bff9a23");
  }, []);

  return null;
};
