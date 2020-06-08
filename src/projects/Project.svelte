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
    filter: grayscale(100%);
    border-radius: 10px;
    overflow: hidden;
    color: white;
    box-shadow: 0 1rem 2rem rgba(20, 20, 20, 0.69);
  }
  div:hover {
    filter: grayscale(10%);
    transition: all 0.3s ease-in-out;
    color: orange;
  }
  a {
    position: relative;
    top: 0;
    z-index: -1;
    /* opacity applies to text links globally but not project */
    opacity: 1;
  }
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    position: absolute;
    top: calc(150px - 1rem);
    width: 100%;
    text-align: center;
  }
  p {
    margin: 1rem;
    color: black;
  }
</style>

<div>
  <a href="https://{link}" target="_blank">
    <img {src} {alt} />
  </a>
  <h3>{title}</h3>
  <p>{description}</p>
</div>
