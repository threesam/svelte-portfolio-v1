<script>
  import { onMount } from 'svelte'

  import Project from './Project.svelte'
  import projects from './projects'
  console.log(projects)

  let mover = 0
  let size = 300
  onMount(() => {
    const interval = setInterval(() => {
      mover += 1
    }, 100)

    return () => clearInterval(interval)
  })
</script>

<style>
  div {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row;
    border: 1px solid red;
    justify-content: center;
    overflow: hidden;
  }
</style>

<div>
  {#each projects as project}
    <Project {...project} {mover} />
  {/each}
</div>
