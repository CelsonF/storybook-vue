import Button from "../components/Button.vue";

export default {
  title: "Button",
  component: "Button",
};

export const withSlot = () => ({
  components: { Button },

  template: `
  <Button>Slot</Button>
  `,
});

export const withText = () => ({
  render() {
    return <b-button> Teste </b-button>;
  },
});
