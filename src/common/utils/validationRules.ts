import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Nama wajib diisi";
  }
  if (!values.email) {
    errors.email = "Alamat email wajib diisi";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Alamat email tidak valid";
  }
  if (!values.message) {
    errors.message = "Pesan wajib diisi";
  }
  return errors;
}
