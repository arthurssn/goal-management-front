import AppInput from "@/components/forms/AppInput";
import { useState } from "react";
import { Form } from "./styles";
import CardForm from "@/components/layout/CardForm";
import { IGoal } from "@/interfaces/IGoal";

export default function CreateGoal() {
  const [goal, setGoal] = useState<IGoal>({} as IGoal);

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    console.log(e.target);
  }

  return (
    <CardForm title="Create Goal" onClickBack="/">
      <Form onChange={handleForm}>
        <AppInput
          label="Title"
          size="100%"
          id="title"
          type="text"
          onChange={(e) => setGoal({ ...goal, title: e.target.value })}
          placeholder="Goal title"
        />
        <AppInput
          label="Description"
          size="100%"
          id="description"
          type="text"
          onChange={(e) => setGoal({ ...goal, title: e.target.value })}
          placeholder="Goal description"
        />
      </Form>
    </CardForm>
  );
}
