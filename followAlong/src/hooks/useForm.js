import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValues) => {
  const [value, setValue] = useLocalStorage("form", initialValues);

  const handleChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValue(initialValue);
  };

  return [value, handleChanges, clearForm];
};
