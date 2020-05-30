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
    padding: 0 2rem;
  }
  div {
    height: 100%;
    border-radius: none;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5rem;
  }

  div,
  img {
    box-shadow: 0 1rem 2rem rgba(20, 20, 20, 0.69);
  }
  img {
    width: calc(100% - 4rem);
    height: auto;
    border-radius: 50%;
    border: 0.5rem solid rgba(0, 0, 0, 0.8);
    margin: 2rem auto;
    filter: grayscale(20%);
  }

  h1 {
    font-size: 3rem;
    font-weight: 100;
    text-align: center;
  }
  p {
    font-size: 4vw;
    line-height: 1.2rem;
  }
  @media (min-width: 720px) {
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
  }
</style>

<section>
  <div>
    <h1>hey</h1>
  </div>
  <img src="images/gridTest.jpg" alt="test" />
  <div>
    <p>
      My name is Salvatore D'Angelo III but everyone calls me
      <b>Sam</b>
    </p>
  </div>
  <P5Canvas id="p5-home" {sketch} />
</section>
