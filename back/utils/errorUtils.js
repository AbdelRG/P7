const signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.errors[0].message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.errors[0].message.includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà enregistré";

  if (err.errors[0].message.includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

const loginErrors = (err) => {
  let errors = { error: "" };
  if (err.message.includes("password") | err.message.includes("email"))
    errors.error = "Email ou mot de passe incorrect";
  return errors;
};

export { signUpErrors, loginErrors };
