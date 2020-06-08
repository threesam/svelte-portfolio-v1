<style>
  div {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
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
      margin: 0.5rem;
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
      margin: 1rem;
    }
  }
</style>

<div>
  <img src="favicon.png" alt="sveltejs logo" />
  <i class="fab fa-react" />
  <i class="fab fa-js-square" />
  <i class="fab fa-node-js" />
  <i class="fab fa-html5" />
  <i class="fab fa-css3-alt" />
  <i class="fab fa-linux" />
  <i class="fab fa-adobe" />
</div>
