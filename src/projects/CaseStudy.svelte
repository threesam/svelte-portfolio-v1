<script>
  import { slide, fade } from 'svelte/transition'

  let toggled = false
  let animationTiming = 100

  export let project
  const { tags, what, challenge, how } = project
</script>

<style>
  article {
    padding: 2rem;
    /* border-radius: 13px; */
  }
  .toggled {
    background: var(--black);
    transition: all 1s ease-in-out;
  }

  p {
    margin-top: 1rem;
  }

  span {
    text-decoration: underline;
    margin-top: 1rem;
    opacity: 0.7;
    font-size: 0.9rem;
    cursor: pointer;
  }

  span:hover {
    opacity: 0.9;
  }
</style>

<article class:toggled>
  <h3>Case Study</h3>
  <p>{what}</p>
  {#if !toggled}
    <span
      out:fade={{ duration: animationTiming }}
      on:click={() => (toggled = true)}>
      read more
    </span>
  {:else}
    <div in:slide={{ delay: animationTiming }}>
      <p>{challenge}</p>
      <p>{how}</p>
    </div>
  {/if}
</article>
