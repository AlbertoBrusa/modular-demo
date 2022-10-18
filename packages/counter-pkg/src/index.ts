import { useState } from "react";

export const ModifyCounter = (): [number, (modifier: number) => void] => {
  const [value, setValue] = useState(0);
  const changeValue = (modifier: number) => setValue(value + modifier);
  return [value, changeValue]
}