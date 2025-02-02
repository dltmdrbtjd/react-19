import { useState, useTransition } from "react";
import { updateName } from "../services/api/user";

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
    <div className="flex flex-col gap-21 3xl:bg-grey-100 2xl:bg-grey-900">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="border border-solid border-coffee-100 focus:outline-none focus:ring-1 focus:ring-coffee-200 focus:border-coffee-300 font-mono"
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        style={{
          backgroundColor: isPending ? "var(--color-coffee-200)" : "",
        }}
        className="font-sans animate-fade-in-scale"
      >
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Action;
