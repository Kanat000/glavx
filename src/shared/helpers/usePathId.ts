import { useMemo } from "react";

export const usePathId = (path: string) => {
  if (path.endsWith("/")) path = path.slice(0, -1);
  return useMemo(() => {
    const pathArr = path.split("/");
    return Number(pathArr[pathArr.length - 1]);
  }, [path]);
};
