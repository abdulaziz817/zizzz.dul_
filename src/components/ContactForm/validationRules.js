const validate = (values) => {
    const errors = {};
  
    // Nama harus diisi
    if (!values.name) {
      errors.name = "Nama harus diisi!";
    }
  
    // Validasi Email: harus diisi dan format email yang valid
    if (!values.email) {
      errors.email = "Email harus diisi!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email tidak valid!";
    }
  
    // Pesan harus diisi dan minimal 10 karakter
    if (!values.message) {
      errors.message = "Pesan harus diisi!";
    } else if (values.message.length < 10) {
      errors.message = "Pesan harus minimal 10 karakter!";
    }
  
    return errors;
  };
  
  export default validate;
  