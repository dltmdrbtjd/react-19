import { useState, useTransition } from "react";
import { updateName } from "./services/api/user";

// Transition Handling
function Action() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        const res = await updateName(name);
        alert(res);
        setError(null);
      } catch (error) {
        setError(error as string);
      }
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Action;
