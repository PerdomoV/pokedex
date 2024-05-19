import { SafeAreaView, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserPanel from "../components/Auth/UserPanel";

export default function Account(){

  let auth = null;

  return (
    <SafeAreaView>
      { auth ? <UserPanel/> : <LoginForm/> }
      {/* <Text>Estamos en el screen de Account.</Text> */}
    </SafeAreaView>
  );
}