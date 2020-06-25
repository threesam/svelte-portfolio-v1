<script>
  import SocialLinks from './SocialLinks.svelte'
  import { fly } from 'svelte/transition'
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
    padding: 0 2rem;
    animation: flyIn 1.5s;
    animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 1.3);
  }

  @keyframes flyIn {
    0% {
      transform: translateX(-2rem);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  div {
    position: relative;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1rem 2rem var(--shadow);
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
    color: var(--yellow);
    text-shadow: 0 0 2rem var(--black);
  }
</style>

<section transition:fly={{ y: -300, duration: 5000 }}>
  <div>
    <img src="images/gridTest.jpg" alt="test" />
    <h1>hey</h1>
    <SocialLinks />
  </div>
</section>
