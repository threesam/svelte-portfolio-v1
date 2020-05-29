<script>
  import P5Canvas from './P5Canvas.svelte'

  import sketch from './sketch'
</script>

<style>
  section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;
  }
  div {
    height: max-content;
    width: max-content;
    background-color: rgba(20, 20, 20, 0.8);
    color: white;
    padding: 3rem;
    border-radius: 50%;
    text-align: center;
  }
  img {
    width: 300px;
    border-radius: 50%;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
  }
</style>

<section>
  <div>
    <img src="images/gridTest.jpg" alt="test" />
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
