<script>
  export let title
  export let src
</script>

<style>
  div {
    display: grid;
    place-content: center;
    background-size: cover;
    background-position: center;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px 15px white;
  }
</style>

<div style="background-image: url({src});">
  <h2>{title}</h2>
</div>
