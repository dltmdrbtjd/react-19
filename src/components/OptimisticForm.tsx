import { useOptimistic } from "react";
import { updateName } from "../services/api/user";

interface Props {
  currentName: string;
  onUpdateName: (newName: string) => void;
}
function OptimisticForm({ currentName, onUpdateName }: Props) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData: FormData) => {
    const newName = formData.get("name")?.toString() ?? "";
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}

export default OptimisticForm;
