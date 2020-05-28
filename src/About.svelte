<script>
  import AboutTile from './AboutTile.svelte'
  const tiles = [
    {
      title: 'bio',
      background: 'green',
      content: 'test content',
    },
    {
      title: 'fam',
      background: 'red',
      content: 'test content',
    },
    {
      title: 'music',
      background: 'blue',
      content: 'test content',
    },
    {
      title: 'coding',
      background: 'yellow',
      content: 'test content',
    },
  ]
</script>

<style>
  section {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
</style>

<section>
  <AboutTile {...tiles[0]} />
  <AboutTile {...tiles[1]} />
  <AboutTile {...tiles[2]} />
  <AboutTile {...tiles[3]} />
</section>
