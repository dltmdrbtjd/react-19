import { useState } from "react";
import OptimisticForm from "../components/OptimisticForm";

function Optimistic() {
  const [name, setName] = useState("");
  const onUpdateName = (newName: string) => {
    setName(newName);
  };
  return <OptimisticForm currentName={name} onUpdateName={onUpdateName} />;
}

export default Optimistic;
