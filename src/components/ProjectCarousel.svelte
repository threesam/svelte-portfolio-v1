<script>
  import Project from './Project.svelte'
  import projects from './projects'
</script>

<style>
  div {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: 760px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
  }
  /* @media (min-width: 1020px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } */
</style>

<div>
  {#each projects as project}
    <Project {...project} />
  {/each}
</div>
