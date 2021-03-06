import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "../store/actions/user.actions";

export const AppNavigator = () => {
  const dispatch = useDispatch();
  dispatch(refreshUser());
  const user = useSelector((state) => state.user.token);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
