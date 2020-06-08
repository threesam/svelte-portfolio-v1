<script>
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
    box-shadow: 0 1rem 2rem rgba(20, 20, 20, 0.69);
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
    color: #eaa221;
  }
  p {
    margin: 1rem;
    color: black;
  }
</style>

<div>
  <a
    href="https://{link}"
    target="_blank"
    style="background-image: url({src});">
    <h3>{title}</h3>
  </a>
  <p>{description}</p>
</div>
