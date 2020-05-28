<script>
  import AboutTile from './AboutTile.svelte'

  const tiles = [
    {
      title: 'bio',
      src: '/images/eyeGrapefruit.png',
    },
    {
      title: 'fam',
      src: '/images/darkommute.png',
    },
    {
      title: 'music',
      src: '/images/eyeGrapefruit.png',
    },
    {
      title: 'coding',
      src: '/images/darkommute.png',
    },
  ]
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    width: 100%;
    height: 100vh;
  }
</style>

<section>
  {#each tiles as tile, i}
    <AboutTile {...tile} />
  {/each}
</section>
