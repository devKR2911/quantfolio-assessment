import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import Grid from "@/components/core/Grid/Grid";

import SortableItem from "../SortableItem/SortableItem";

interface IDraggableComponentProps {
  children: React.ReactNode;
  identifier: string;
}
interface ICustomNodeMapping {
  [key: UniqueIdentifier]: React.ReactNode;
}

const DraggableComponent: React.FC<IDraggableComponentProps> = ({ children, identifier }) => {
  const nodeElements: ICustomNodeMapping = {};

  (children as React.ReactNode[]).forEach((node, index) => {
    nodeElements[`index-${index}`] = node;
  });

  const [items, setItems] = useState<UniqueIdentifier[]>(() => {
    try {
      const key = `${identifier.replaceAll(" ", "-")}-order`;
      const valueInStorage = localStorage.getItem(key);
      if (valueInStorage) {
        const arrayValue = JSON.parse(valueInStorage) as UniqueIdentifier[];
        const objectKeys = Object.keys(nodeElements);
        // Check if the value in storage is an array and all its elements are valid keys in nodeElements
        // If they are different, that mean the structure of nodeElements has changed, so we ignore the stored value
        if (
          Array.isArray(arrayValue) &&
          objectKeys.length === arrayValue.length &&
          arrayValue.every((val) => objectKeys.includes(val as string))
        ) {
          return arrayValue;
        }
      }
    } catch (e) {
      console.error("Error parsing localStorage value", e);
    }
    return Object.keys(nodeElements);
  });

  useEffect(() => {
    const key = `${identifier.replaceAll(" ", "-")}-order`;
    localStorage.setItem(key, JSON.stringify(items));
  }, [items]);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id ?? "");
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid>
          {items.map((key) => (
            <SortableItem key={key} id={key}>
              {nodeElements[key]}
            </SortableItem>
          ))}
        </Grid>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableComponent;
