import { 
         Text, 
         Button, 
         View, 
         TextInput,
         StyleSheet
        } from "react-native"

import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm(){
// export default LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Enviando datos...");
      console.log(formValue);
    }
  });

  function initialValues(){
    return {
      username: "",
      password: ""
    }
  }

  function validationSchema(){
    return {
      username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria")
    }
  }

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username",text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password",text)}
      />
      <Button title="Enviar" style={styles.submitButton} onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

    </View>
  );
}


const styles = StyleSheet.create(  {
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  submitButton: {
    width: 70
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20
  }

} )