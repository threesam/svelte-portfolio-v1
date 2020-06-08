<script>
  import Home from './home/Home.svelte'
  import About from './about/About.svelte'
  import Projects from './projects/Projects.svelte'

  import P5Canvas from './home/P5Canvas.svelte'
  import sketch from './home/sketch'
</script>

<style>

</style>

<main>
  <Home />
  <About />
  <Projects />
  <P5Canvas id="p5-home" {sketch} />
</main>
