import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteOutline,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useGlobalContext } from "./context";

const Task = ({ id, name, completed, color, index }) => {
  const { removeTask, toggleDone, editTask } = useGlobalContext();

  return (
    <Draggable key={id} draggableId={"draggable-" + id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? "0 0 5rem #666" : "none",
            opacity: snapshot.isDragging
              ? "1"
              : provided.draggableProps.style.opacity,
            backgroundColor: color,
          }}
          className={`task ${completed && "task-done"}`}
        >
          <p>
            {name} - {completed ? "Completed" : "Not Completed"}
          </p>
          <button onClick={() => toggleDone(id)}>
            {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </button>
          <button onClick={() => removeTask(id)}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => editTask(id)}>
            <FiEdit />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
