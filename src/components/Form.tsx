import { FormEvent, useRef } from "react";

const Form = () => {
  // useRef -- to refer the DOM element
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  // creating an object which can be stored in a server-side
  const person = { name: "", age: '' };

  const handleSubmit = (event: FormEvent) => {
    // to prevent the default action(page will be refreshed after submit)
    event.preventDefault();
    //printing the value to the console
    // if (nameRef.current !== null) console.log(nameRef.current.value);
    // if (ageRef.current !== null) console.log(ageRef.current.value);

    // saving the input information to the person object
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    // div.mb-3>label.form-label+input.form-control ---shortcut to create a form
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
