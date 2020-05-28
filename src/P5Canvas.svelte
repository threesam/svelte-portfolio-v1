<script>
  export let id
  import p5 from './p5.min'
  export let sketch

  import { onMount } from 'svelte'

  onMount(function () {
    console.log(`${id}, so this is working`)
    let myp5 = new p5(sketch, id)
  })
</script>

<style>
  div {
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>

<div {id} />
