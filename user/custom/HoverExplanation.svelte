<script>
  export let explanation = '';
</script>

<span title={explanation}>
  <slot />
</span>

<style lang="scss">
  span {
    color: var(--qwer-link-hover-color);
    font-weight: 450;
  }
</style>
