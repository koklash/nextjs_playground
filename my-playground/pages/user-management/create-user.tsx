import { useForm, SubmitHandler } from "react-hook-form";
import UserForm from "../../components/userCreateForm";

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
      <UserForm/>
    </div>
  );
}