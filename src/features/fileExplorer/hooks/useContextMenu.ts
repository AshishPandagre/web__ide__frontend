import { RefObject, useEffect, useState } from "react";
import { FileType } from "../../../redux/editor/types";

interface DialogBoxType {
  active: boolean;
  x?: number;
  y?: number;
}

export default function (
  objRef: RefObject<HTMLDivElement>,
  obj: FileType,
  dialogRef: RefObject<HTMLDivElement>
) {
  const [dialog, setDialog] = useState<DialogBoxType>();

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setDialog({
        active: true,
        x: e.x,
        y: e.y,
      });
    };

    const handleBlur = (e: any) => {
      e.preventDefault();
      setDialog({
        active: false,
      });
    };

    dialogRef.current?.focus();
    objRef.current?.addEventListener("contextmenu", handleContextMenu);
    dialogRef.current?.addEventListener("blur", handleBlur);

    return () => {
      objRef.current?.removeEventListener("contextmenu", handleContextMenu);
      dialogRef.current?.removeEventListener("blur", handleBlur);
    };
  });

  return {
    dialogActive: dialog?.active,
    dialogX: dialog?.x,
    dialogY: dialog?.y,
  };
}
