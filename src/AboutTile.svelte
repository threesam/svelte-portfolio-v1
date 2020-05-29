<script>
  export let title
  export let src
  export let content

  let card = { toggled: false }

  const toggle = () => {
    card.toggled = !card.toggled
  }
</script>

<style>
  div {
    display: grid;
    place-content: center;
  }
  #not-toggled {
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
  }
  #not-toggled:hover {
    filter: grayscale(30%);
    border: 0.25rem solid black;
  }

  #toggled {
    background-image: unset;
    background: black;
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
  #toggled:hover {
    filter: none;
    border: none;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 15px white;
  }
</style>

{#if !card.toggled}
  <div id="not-toggled" style="background-image: url({src});" on:click={toggle}>
    <h2>{title}</h2>
  </div>
{/if}

{#if card.toggled}
  <div id="toggled" on:click={toggle}>
    <p>{content}</p>
  </div>
{/if}
