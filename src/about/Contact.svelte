<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  let toggled = false
  let loaded = false
  let toggle = () => (toggled = !toggled)
  onMount(() => {
    loaded = true
  })
</script>

<style>
  button {
    background: none;
    font-size: 1.69rem;
    outline: none;
    border: none;
    color: var(--ice);
    cursor: pointer;
  }
  div {
    display: flex;
    flex-flow: column;
  }
  a {
    margin-top: 1rem;
  }
  svg {
    float: right;
  }

  .toggled {
    opacity: 0.3;
  }
</style>

{#if loaded}
  <button on:click={toggle} class:toggled transition:fade>contact</button>
{/if}
{#if toggled}
  <div transition:fade>
    <a
      in:fly={{ y: -50 }}
      out:fly={{ y: -50, delay: 100 }}
      href="mailto:contact@threesam.com"
      aria-label="email">
      <!-- <i class="fas fa-envelope" /> -->

      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30">
        <path
          d="M1.5 0C.671 0 0 .67 0 1.5v8.993c0 .83.671 1.5 1.5 1.5h3.732l1.852
          2.775a.5.5 0 00.832 0l1.851-2.775H13.5c.829 0 1.5-.67
          1.5-1.5V1.5c0-.83-.671-1.5-1.5-1.5h-12z"
          fill="currentColor" />
      </svg>
    </a>
    <a
      in:fly={{ y: -100, delay: 100 }}
      out:fly={{ y: -100 }}
      href="tel:609-356-4012"
      aria-label="text or call">
      <!-- <i class="fas fa-phone-square-alt" /> -->
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30">
        <path
          d="M2.5 0A2.5 2.5 0 000 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0
          002.5-2.5v-1.382a1.5 1.5 0 00-.83-1.342l-2.415-1.208a1.5 1.5 0
          00-2.094.868l-.298.893a.71.71 0 01-.812.471A5.547 5.547 0 014.2
          6.45a.71.71 0 01.471-.812l1.109-.37a1.5 1.5 0
          00.98-1.787l-.586-2.344A1.5 1.5 0 004.72 0H2.5z"
          fill="currentColor" />
      </svg>
    </a>
  </div>
{/if}
