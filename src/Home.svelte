<script>
  import P5Canvas from './P5Canvas.svelte'

  import sketch from './sketch'
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  div {
    position: sticky;
    top: 0;
    height: max-content;
    width: 100%;
    padding: 3rem;
    background-color: rgba(20, 20, 20, 0.8);
    color: white;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
  }
</style>

<section>
  <div>
    <h1>Hey</h1>
    <p>
      My name is Salvatore D'Angelo III
      <br />
      But everyone calls me
      <b>Sam</b>
    </p>
  </div>
  <P5Canvas id="p5-home" {sketch} />
</section>
