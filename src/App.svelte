<script>
  import Home from './components/Home.svelte'
  import About from './components/About.svelte'
  import Projects from './components/Projects.svelte'
  import Languages from './components/Languages.svelte'

  import P5Canvas from './components/P5Canvas.svelte'
  import sketch from './components/sketch'
</script>

<style>
  :global(:root) {
    --white: rgb(245, 245, 236);
    --black: rgb(10, 10, 8);
    --light-grey: rgb(152, 150, 164);
    --dark-grey: rgb(42, 40, 48);
    --yellow: rgb(252, 252, 48);
  }
</style>

<main>
  <Home />
  <About />
  <Projects />
  <Languages />
  <P5Canvas id="p5-home" {sketch} />
</main>
