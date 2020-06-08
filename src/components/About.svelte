<style>
  section {
    display: grid;
    width: 100%;
    height: 100vh;
  }
  div {
    background-size: cover;
    background-attachment: fixed;
    text-align: left;

    padding: 1rem;

    transition: all 0.2s ease-in;
  }
  p {
    font-size: 0.8rem;
  }
  a {
    color: inherit;
  }
  a:hover {
    color: orangered;
  }
  @media (min-width: 300px) {
    section {
      grid-template-columns: 1fr;
    }
    div {
      display: grid;
      place-content: center;
    }
  }
  @media (min-width: 800px) {
    section {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      padding: 1rem;
    }
    div {
      padding: 2rem;
    }
  }
</style>

<section>
  <div class="bg">
    <p>
      My name is Salvatore D'Angelo III but everyone calls me
      <b>Sam</b>
    </p>
  </div>
  <div class="bg">
    <p>I grew up in Trenton, NJ</p>
  </div>
  <div class="bg">
    <p>
      Graduated with a double major in PolySci and Global Studies from
      <a href="https://rider.edu" target="_blank">Rider</a>
      just in time to realize that I liked the theory of politics a lot more
      than the practice
    </p>
  </div>
  <div class="bg">
    <p>
      I was convinced to check out a “really cool” open mic at a local
      <a href="https://www.facebook.com/trentonsocial" target="_blank">bar</a>
      in my hometown
    </p>
  </div>
  <div class="bg">
    <p>
      It was and I went every week, started waiting tables, making drinks,
      became a part of a beautifully underground arts community, co-founded a
      production company(link), and met my
      <a href="http://deanarants.netlify.app" target="_blank">wife</a>
    </p>
  </div>
  <div class="bg">
    <p>
      We had a little girl, named Phoenix, and our second girl, Juniper, is
      months away
    </p>
  </div>
  <div class="bg">
    <p>Our dog, Koda, is grumpily protective of each new addition</p>
  </div>
  <div class="bg">
    <p>
      Inspired by #generativeart and looking to evolve my company, I came upon
      <a href="https://processing.org" target="_blank">
        The Processing Foundation
      </a>
    </p>
  </div>
  <div class="bg">
    <p>
      I started slow and kept iterating daily until it became an insatiable
      pursuit
    </p>
  </div>
  <div class="bg">
    <p>
      Simple sketches needed an online home, which led to an interest in web
      design and development
    </p>
  </div>
  <div class="bg">
    <p>
      I’m now obsessed with solving my clients’ problems and designing
      responsive solutions that scale
    </p>
  </div>
</section>
