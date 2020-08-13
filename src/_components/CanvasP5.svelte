<script>
  export let id
  import p5 from './p5/p5.min'
  export let sketch

  import { onMount } from 'svelte'

  onMount(() => {
    let myp5 = new p5(sketch, id)
  })
</script>

<div {id} />
