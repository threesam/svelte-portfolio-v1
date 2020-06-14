<script>
  export let id
  export let title
  export let description
  export let image
  let src = image.src
  let alt = image.alt
  export let link
</script>

<style>
  div {
    width: 300px;
    height: auto;
    position: relative;
    overflow-y: hidden;
    border-radius: 10px;
    overflow: hidden;
    color: var(--white);
    box-shadow: 0 1rem 2rem var(--shadow);
  }
  a {
    width: 300px;
    height: 300px;
    position: relative;
    display: grid;
    place-content: center;
    background-size: cover;
    filter: grayscale(100%);
  }
  a:hover {
    filter: grayscale(10%);
    transition: all 0.3s ease-in-out;
  }
  h3 {
    font-size: 1.5rem;
    /* marigold */
    color: #eaa221;
  }
  p {
    margin: 1rem;
    color: var(--black);
  }
</style>

<div>
  <a
    {id}
    href="https://{link}"
    target="_blank"
    style="background-image: url({src});"
    rel="noopener noreferrer">
    <h3>{title}</h3>
  </a>
  <p>{description}</p>
</div>
