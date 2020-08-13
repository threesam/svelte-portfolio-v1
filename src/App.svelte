<script>
  import About from './about/About.svelte'
  import Projects from './projects/Projects.svelte'

  import P5Canvas from './_components/CanvasP5.svelte'
  import sketch from './_components/p5/sketch.js'

  import { onMount } from 'svelte'
  // let visible = false
  onMount(() => {
    // setTimeout(() => (visible = true), 2000)
  })
</script>

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
  }
</style>

<main>
  <About />
  <Projects />
  <!-- {#if visible} -->
  <div>
    <P5Canvas id="p5-home" {sketch} />
  </div>
  <!-- {/if} -->
</main>
