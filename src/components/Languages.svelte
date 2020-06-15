<style>
  div {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
  img:nth-of-type(1) {
    filter: invert();
  }
  @media (max-width: 799px) {
    i {
      font-size: 1rem;
    }
    img:nth-of-type(1) {
      width: 1rem;
    }
    img:nth-of-type(2) {
      width: 1.2rem;
      margin: 0.5rem;
    }
    i,
    img {
      margin: 0.7rem;
    }
  }
  @media (min-width: 800px) {
    i {
      font-size: 2rem;
    }
    img:nth-of-type(1) {
      width: 2rem;
    }
    img:nth-of-type(2) {
      width: 2.4rem;
      margin: 1.1rem;
    }
    i,
    img {
      margin: 1.5rem;
    }
  }
</style>

<div>
  <img src="svelte.png" alt="sveltejs logo" />
  <i class="fab fa-react" />
  <i class="fab fa-js-square" />
  <i class="fab fa-node-js" />
  <i class="fab fa-html5" />
  <i class="fab fa-css3-alt" />
  <i class="fab fa-linux" />
  <img src="rust-logo-blk.svg" alt="rustlang logo" />
  <i class="fab fa-adobe" />
</div>
