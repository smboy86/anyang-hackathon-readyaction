import React from "react";

import { View, Text } from "react-native";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { Card, Button, Input } from "react-native-elements";

import { InputField } from "./InputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export default class LoginScreen extends React.Component {
  componentDidMount() {}

  _moveHome = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Card>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
          {/* <Field
            name="email"
            placeholder="Email"
            component={InputField}
            containerStyle={{ width: "100%" }}
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
            containerStyle={{ width: "100%" }}
            autoCapitalize="none"
          /> */}
          <Button
            style={{ marginTop: 30 }}
            title="Submit"
            onPress={() => this._moveHome()}
          />
        </Card>
      </View>
    );
  }
}
