import Button from "../components/Button.vue";

export default {
  title: "Button",
  component: "Button",
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<b-button :variant="variant">TESTE</b-button>',
});

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  Variant: "primary",
};
