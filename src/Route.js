import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from "../src/auth/SignIn";
import WebPage from "../src/web/WebPage";

const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  WebPage: { screen: WebPage }
});

export default createAppContainer(AppNavigator);
