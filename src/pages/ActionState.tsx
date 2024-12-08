import { useActionState } from "react";
import { updateName } from "../services/api/user";
import ActionButton from "../components/ActionButton";

function ActionState() {
  const [error, submitAction, isPending] = useActionState(
    async (_, formData: FormData) => {
      const name = formData.get("name")?.toString();
      if (!name) {
        return alert("Name is required");
      }

      try {
        await updateName(name);
        alert("Success");
      } catch (error) {
        return error as string;
      }
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      {/* useActionState의 isPending useCase */}
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {/* useFormStatus의 pending useCase */}
      <ActionButton />
      {!!error && <p>{error}</p>}
    </form>
  );
}

export default ActionState;
