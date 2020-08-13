<script>
  import languages from './languages.js'
</script>

<style>
  ul {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0.5rem;
    /* max-width: 56rem; */
    color: var(--light-grey);
    opacity: 0.4;
    max-width: 600px;
    margin: 0 auto;
  }
  li {
    text-align: center;
  }
</style>

<ul>
  {#each languages as { name, asset }, i}
    <li>
      {@html asset}
      <!-- <br />
        {name} -->
    </li>
  {/each}
</ul>
