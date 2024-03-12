import { useEffect, useState } from "react";
import "./Fade.css";

export function Fade({ visible, children }) {
  const [showChildren, setShowChildren] = useState(visible);
  useEffect(() => {
    if (visible) {
      setShowChildren(true);
    } else {
      const timer = setTimeout(() => {
        setShowChildren(false);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);
  let classeName = "fade";
  if (!visible) {
    classeName += " out";
  }
  return <div className={classeName}>{showChildren && children}</div>;
}
