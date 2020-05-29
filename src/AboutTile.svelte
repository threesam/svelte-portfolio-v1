<script>
  import { createEventDispatcher } from 'svelte'
  import { scale, fade } from 'svelte/transition'
  const dispatch = createEventDispatcher()

  export let title
  export let src
  export let content
  export let toggled = false
</script>

<style>
  div {
    display: grid;
    place-content: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    color: white;
    cursor: pointer;
    filter: grayscale(100%);
    border: 0.25rem solid transparent;
  }
  div:hover {
    border: 0.25rem solid black;
    filter: grayscale(10%);
    color: black;
    transition: all 0.125s ease-in-out;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 5rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    color: white;
  }
</style>

<div style="background-image: url({src});" on:click={() => dispatch('click')}>
  {#if !toggled}
    <h2 in:fade>{title}</h2>
  {:else if toggled}
    <p in:scale={{ start: 0.01 }}>{content}</p>
  {/if}
</div>
