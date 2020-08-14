<script>
  import { fly, fade } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  import CarouselControl from './CarouselControl.svelte'
  import Project from './Project.svelte'
  import projects from './projects.js'
  import CanvasP5 from '../_components/CanvasP5.svelte'
  import sketch from '../_components/p5/projectSketch.js'

  let activeProject = 0
  $: dir = 1

  const previousProject = () => {
    dir = 0
    if (activeProject <= 0) {
      activeProject = projects.length - 1
    } else {
      activeProject--
    }
  }

  const nextProject = () => {
    dir = -1
    if (activeProject >= projects.length - 1) {
      activeProject = 0
    } else {
      activeProject++
    }
  }

  let transitionX = 200
</script>

<style>
  section {
    position: relative;
    width: 100%;
    /* max-width: 600px; */
    min-height: 100vh;
    /* overflow-x: hidden; */
    /* background: var(--black); */
  }
  h1 {
    font-size: 3rem;
    position: relative;
    z-index: 10;
  }
  .project {
    width: 100%;
    position: absolute;
  }
  .sketch {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

<section>
  <div class="sketch">
    <CanvasP5 {sketch} id="project-sketch" />
  </div>
  <CarouselControl {nextProject} {previousProject}>
    <h1>Projects</h1>
  </CarouselControl>
  {#each projects as project, i}
    {#if i === activeProject}
      <div
        class="project"
        in:fly={{ x: dir * transitionX, easing: cubicOut, duration: 700 }}
        out:fade={{ duration: 350 }}>
        <Project {project} />
      </div>
    {/if}
  {/each}
</section>
