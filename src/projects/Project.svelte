<script>
  export let id
  export let title
  export let description
  export let image

  export let mover
</script>

<style>
  div {
    position: relative;
    min-width: 300px;
    min-height: 300px;
    background-color: grey;
    margin: 1rem;
    overflow-y: hidden;
    filter: grayscale(100%);
    border: 1px solid red;
  }
  div:hover {
    transform: scale(1.2);
    filter: grayscale(10%);
    transition: all 0.3s ease-in-out;
  }
  a {
    position: relative;
    top: 0;
    z-index: -1;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>

<div style="left: {mover}px;">
  <a href="https://hardroadofhope.com">
    <img src={image} alt="" />
  </a>
  <h3>{title} {id}</h3>
  <p>{description}</p>
</div>
