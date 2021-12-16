import React, { useState } from "react";

type MyFormProps = {
  // onSubmit이라는 함수 props는 form이라는 파라미터를 가지고 있는데
  // form 파라미터는 문자 타입의 name, description을 객체로 가지고 있다.
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      // [name]에는 name or description이 들어옴
      [name]: value,
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
