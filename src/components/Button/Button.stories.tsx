import * as React from "react";
import { Meta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
} as Meta<typeof Button>;

export const PrimaryButton = () => (
    <Button variant={"default"} label="Primary button" />
);
export const DangerButton = () => (
    <Button variant={"danger"} label="Danger button" />
);
