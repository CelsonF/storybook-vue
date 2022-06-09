<template>
  <b-button :variant="variant"> Slot </b-button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>
