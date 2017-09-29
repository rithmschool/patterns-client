import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import WideButton from "../components/atoms/WideButton";
import Modal from "../components/atoms/Modal";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("WideButton")} />
));

storiesOf("WideButton", module)
  .add("with text", () => (
    <WideButton onClick={action("clicked")}>Hello Adele</WideButton>
  ))
  .add("with some emoji", () => (
    <WideButton onClick={action("clicked")}>😀 😎 👍 💯</WideButton>
  ));

storiesOf("Modal", module).add("testing", () => <Modal />);
