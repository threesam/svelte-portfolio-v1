<script>
  import AboutTile from './AboutTile.svelte'

  const tiles = [
    {
      toggled: false,
      title: 'bio',
      src: '/images/eyeGrapefruit.png',
      content:
        'Ad ut veniam aute Lorem ad ullamco et sit do pariatur qui mollit. Quis minim cupidatat irure nisi dolor irure do culpa minim ullamco laborum non. Dolor tempor sint est et qui laboris eu aute sunt excepteur excepteur ipsum eu. Elit consequat eiusmod duis proident anim deserunt dolore consectetur veniam sint elit Lorem sit. Exercitation est irure id velit non proident velit Lorem nostrud. Ullamco sit est adipisicing anim laborum duis et adipisicing consequat elit labore aute. Commodo ut cillum culpa cillum et ipsum commodo reprehenderit non qui enim.',
    },
    {
      toggled: false,
      title: 'fam',
      src: '/images/eyeGrapefruit.png',
      content:
        'Ad ut veniam aute Lorem ad ullamco et sit do pariatur qui mollit. Quis minim cupidatat irure nisi dolor irure do culpa minim ullamco laborum non. Dolor tempor sint est et qui laboris eu aute sunt excepteur excepteur ipsum eu. Elit consequat eiusmod duis proident anim deserunt dolore consectetur veniam sint elit Lorem sit. Exercitation est irure id velit non proident velit Lorem nostrud. Ullamco sit est adipisicing anim laborum duis et adipisicing consequat elit labore aute. Commodo ut cillum culpa cillum et ipsum commodo reprehenderit non qui enim.',
    },
    {
      toggled: false,
      title: 'music',
      src: '/images/eyeGrapefruit.png',
      content:
        'Ad ut veniam aute Lorem ad ullamco et sit do pariatur qui mollit. Quis minim cupidatat irure nisi dolor irure do culpa minim ullamco laborum non. Dolor tempor sint est et qui laboris eu aute sunt excepteur excepteur ipsum eu. Elit consequat eiusmod duis proident anim deserunt dolore consectetur veniam sint elit Lorem sit. Exercitation est irure id velit non proident velit Lorem nostrud. Ullamco sit est adipisicing anim laborum duis et adipisicing consequat elit labore aute. Commodo ut cillum culpa cillum et ipsum commodo reprehenderit non qui enim.',
    },
    {
      toggled: false,
      title: 'coding',
      src: '/images/eyeGrapefruit.png',
      content:
        'Ad ut veniam aute Lorem ad ullamco et sit do pariatur qui mollit. Quis minim cupidatat irure nisi dolor irure do culpa minim ullamco laborum non. Dolor tempor sint est et qui laboris eu aute sunt excepteur excepteur ipsum eu. Elit consequat eiusmod duis proident anim deserunt dolore consectetur veniam sint elit Lorem sit. Exercitation est irure id velit non proident velit Lorem nostrud. Ullamco sit est adipisicing anim laborum duis et adipisicing consequat elit labore aute. Commodo ut cillum culpa cillum et ipsum commodo reprehenderit non qui enim.',
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
