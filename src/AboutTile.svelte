<script>
  export let title
  export let background
  export let content
  export let link
</script>

<style>
  div {
    display: grid;
    place-content: center;
    padding: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
</style>

<div style="background: {background};">
  <h2>{title}</h2>
  <p>{content}</p>
</div>
