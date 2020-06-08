<script>
  import SocialLinks from './SocialLinks.svelte'
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
    padding: 0 2rem;
  }
  div {
    position: relative;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(20, 20, 20, 0.69);
  }
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    position: absolute;
    top: 0;
    margin: 1.4rem 1.6rem;
    font-size: 3rem;
    font-weight: 900;
    color: yellow;
    text-shadow: 0 0 2rem black;
  }
  p {
    position: absolute;
    top: calc(300px - 3rem);
    margin: 1rem;
    font-size: 0.9rem;
  }
</style>

<section>
  <div>
    <img src="images/gridTest.jpg" alt="test" />
    <h1>hey</h1>
    <SocialLinks />
  </div>
</section>
