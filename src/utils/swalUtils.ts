import Swal from "sweetalert2";

interface alertParams {
  message: string;
}

interface alertConfirmActionParams extends alertParams {
  title?: string;
}

export async function alertConfirmAction({
  title,
  message,
}: alertConfirmActionParams) {
  const response = await Swal.fire({
    title: title ?? "Are you sure?",
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
  });
  return response;
}

export function alertSuccessMessage({ message }: alertParams) {
  Swal.fire("Success!", message, "success");
}
