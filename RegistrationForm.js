import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email address</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;