<script>
  import ProjectCarousel from './ProjectCarousel.svelte'
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
  }
  h2 {
    margin: 2rem auto;
  }
</style>

<section>
  <h2>Featured Project</h2>
  <ProjectCarousel />
</section>
