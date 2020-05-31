<script>
  import AboutTile from './AboutTile.svelte'

  import tiles from './tiles'
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    width: 100%;
    height: 100vh;
    background-size: cover;
  }

  @media (max-width: 700px) {
    section {
      display: grid;
      grid-template-rows: repeat(4, 50vh);
      width: 100%;
      height: 200vh;
      background-size: cover;
    }
  }
</style>

<section style="background-image: url(images/hero.png)">
  {#each tiles as tile}
    <AboutTile {...tile} on:click={() => (tile.toggled = !tile.toggled)} />
  {/each}
</section>
