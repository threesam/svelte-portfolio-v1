<style>
  div {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
  img {
    filter: invert();
  }
  @media (max-width: 799px) {
    i {
      font-size: 1.2rem;
    }
    img {
      width: 1.2rem;
    }
    i,
    img {
      margin: 0.75rem;
    }
  }
  @media (min-width: 800px) {
    i {
      font-size: 2rem;
    }
    img {
      width: 2rem;
    }
    i,
    img {
      margin: 1.5rem;
    }
  }
</style>

<div>
  <img loading="lazy" src="svelte.png" alt="sveltejs logo" />
  <i class="fab fa-react" />
  <i class="fab fa-js-square" />
  <i class="fab fa-node-js" />
  <i class="fab fa-html5" />
  <i class="fab fa-css3-alt" />
  <i class="fab fa-linux" />
  <i class="fab fa-adobe" />
</div>
