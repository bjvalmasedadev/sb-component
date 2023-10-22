import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: "UI/Labels/My Label",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "Basic Label",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Basic Label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Basic Label",
    fontColor: "#333333",
  },
};
