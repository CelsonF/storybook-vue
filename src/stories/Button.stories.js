import Button from "../components/Button";

export default {
  title: "Molecules/Button",
  component: Button,
};

// 👇 We create a “template” of how args map to rendering
const Template = () => ({
  template: `
	<div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
</div>
	`,
});

export const Default = Template.bind({});
Default.args = {};

// import { storiesOf } from "@storybook/vue";
// // Button.stories.js
// import Button from "./Button.vue";

// export default {
//   title: "Button",
//   component: Button,
// };

// storiesOf("Button", module)
//   .addParameters({ component: Button })
//   .add("default", () => ({
//     template: "<b-button> TESTE </b-button>",
//   }))
//   .add("success", () => ({
//     template: "<b-button variant='success'>TESTE</b-button>",
//   }))
//   .add("danger", () => ({
//     template: "<b-button variant='danger'>TESTE</b-button>",
//   }));
