<script>
  import Project from './Project.svelte'
  import projects from './projects'
</script>

<style>
  div {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
</style>

<div>
  {#each projects as project}
    <Project {...project} />
  {/each}
</div>
