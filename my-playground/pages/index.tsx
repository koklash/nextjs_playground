import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  email: String;
  gender: GenderEnum;
  firstName: String;
  lastName: String;
  birthDate: Date;
  model: File;
}

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  return (
    <div>
      <form onSubmit={handleSubmit((data)=>console.log(data))}>
        <label>First Name</label>
        <input {...register("firstName", { required: true, maxLength: 30 })} /><br/>
        {errors.firstName && <span>Please enter your first name</span>}<br/>
        <label>Last Name</label>
        <input {...register("lastName", { required: true, maxLength: 30 })} /><br/>
        {errors.lastName && <span>Please enter your last name</span>}<br/>
        <label>Gender</label>
        <select {...register("gender", { required: true, pattern: /other|female|male/})} >
          <option disabled selected> -- select an option -- </option>
          <option value="other">other</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select><br/>
        {errors.gender && <span>Please select your gender</span>}<br/>
        <label>Geburtsdatum</label>
        <input type="date" {...register("birthDate", { required: true, min:"01.01.1900" })} /><br/>
        {errors.birthDate && <span>Please select your birth date</span>}<br/>
        <label>3D-Model</label>
        <input accept=".stl" type="file" {...register("model", {required: true })} /><br/>
        {errors.model && <span>Please upload the 3d model</span>}<br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}