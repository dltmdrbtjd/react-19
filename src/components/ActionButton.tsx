import { useFormStatus } from "react-dom";

function ActionButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}

export default ActionButton;
