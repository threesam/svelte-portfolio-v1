<script>
  import ProjectCarousel from './ProjectCarousel.svelte'
</script>

<style>
  section {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-content: center;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 2rem auto;
    position: relative;
    z-index: 10;
  }
</style>

<section>
  <h2>Projects</h2>
  <ProjectCarousel />
</section>
