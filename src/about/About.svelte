<script>
  import SocialLinks from './SocialLinks.svelte'
  import Languages from '../projects/Languages.svelte'
  import Contact from './Contact.svelte'

  import P5Canvas from '../_components/CanvasP5.svelte'
  import sketch from '../_components/p5/sketch.js'

  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'

  let visible = false
  let toggled = false
  const toggle = () => (toggled = !toggled)

  onMount(() => (visible = true))
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    padding: 0 2rem;
  }
  section h1 {
    font-size: 3rem;
  }
  a {
    text-decoration: none;
    color: var(--light-grey);
    opacity: 0.69;
  }
  a:hover {
    opacity: 0.95;
    color: var(--juniper);
  }
  .card {
    position: relative;
    width: 300px;
    background: rgba(var(--rgb-dark-grey), 0.8);
    border-radius: 10px;
    padding: 2rem;
    color: var(--white);
  }
  .languages {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .contact {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .sketch {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<section>
  <div class="sketch">
    <P5Canvas id="p5-home" {sketch} />
  </div>
  {#if visible}
    <div class="contact">
      <Contact />
    </div>
    <div class="card" in:fly={{ x: -100, duration: 1000 }}>
      <h1>hey</h1>
      <br />
      <p>
        My name is Salvatore D'Angelo but everyone calls me Sam. I fell down the
        rabbit-hole of web development and can't get out. Please feed me. I like
        design and building user-interfaces. Here's my
        <a
          href="./SALVATORE_SAM_DANGELO_RESUME.PDF"
          target="_blank"
          rel="noopener noreferrer">
          resume
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16">
            <path
              d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7"
              stroke="currentColor" />
          </svg>
        </a>

      </p>
      <!-- <button on:click={toggle}>More About Me</button> -->
      {#if toggled}
        <h2>About Me</h2>
        <p>I</p>
        <p>why did i change careers</p>
        <p>why being self-taught is advantageous</p>
      {/if}
      <br />
      <SocialLinks />
    </div>
    <div class="languages" in:fade={{ duration: 1000 }}>
      <Languages />
    </div>
  {/if}
</section>
