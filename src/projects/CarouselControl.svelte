<script>
  import Button from '../_components/Button.svelte'
  export let previousProject
  export let nextProject
</script>

<style>
  div {
    padding: 1rem;
    width: 100%;
    display: grid;
    place-content: center;
  }
</style>

<div>
  <Button pos="left" click={previousProject} label="previous project" />
  <slot />
  <Button pos="right" click={nextProject} label="next project" mirror="-1" />
</div>
