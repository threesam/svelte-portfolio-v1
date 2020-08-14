<script>
  import Card from './Card.svelte'
  import CaseStudy from './CaseStudy.svelte'

  export let project
  const { tags } = project
</script>

<style>
  div {
    position: absolute;
    max-width: 700px;
    margin: 0 auto;
    background: rgba(var(--rgb-dark-grey), 0.85);
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0 2rem;
    /* background: linear-gradient(black, rgba(0, 0, 0, 0)); */
  }
  li {
    margin: 0 1rem 1rem 1rem;
  }

  li:first-child {
    text-transform: uppercase;
    opacity: 0.5;
    text-shadow: 0 1px 2px black;
    margin-left: 0;
  }

  @media (min-width: 720px) {
    div {
      border-radius: 13px;
      overflow: hidden;
      margin-top: 1rem;
    }
  }
</style>

<div>
  <Card {project} />
  <ul>
    <li>Tech Used</li>
    {#each tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
  <CaseStudy {project} />
</div>
