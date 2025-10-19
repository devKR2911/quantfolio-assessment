import type React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { UniqueIdentifier } from "@dnd-kit/core";

import classes from "./SortableItem.module.scss";

interface ISotableItemProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
}

const SotableItem: React.FC<ISotableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className={classes.sortable} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
export default SotableItem;
