<script>
  export let label
  export let click
  export let pos

  export let mirror = 1
  let initialSvgSize = 40
  let triggeredSvgSize = 45
  $: svgSize = initialSvgSize
</script>

<style>
  button {
    position: absolute;
    top: 0;
    padding: 0.25rem;
    /* height: 87px; */
    height: 100vh;
    outline: none;
    border: none;
    background: none;
    color: var(--light-grey);
    z-index: 10;
    opacity: 0.3;
  }
  @media (min-width: 820px) {
    button {
      width: calc(50% - 360px);
      opacity: 1;
      cursor: pointer;
    }
    button:hover,
    button:active {
      background: linear-gradient(
        90deg,
        rgba(20, 20, 20, 0.9),
        rgba(0, 0, 0, 0)
      );
      color: white;
    }
  }
</style>

<button
  aria-label={label}
  style="{pos}: 0; transform: scale({mirror}, 1);"
  on:click={click}
  on:mouseover={() => (svgSize = triggeredSvgSize)}
  on:mouseout={() => (svgSize = initialSvgSize)}>
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={svgSize}
    height={svgSize}>
    <path d="M10 14L3 7.5 10 1" stroke="currentColor" stroke-linecap="square" />
  </svg>
</button>
