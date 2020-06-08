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
    font-size: 2.5rem;
    font-weight: 900;
    margin: 2rem auto;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
</style>

<section>
  <h2>Featured Project</h2>
  <ProjectCarousel />
</section>
