<style>
  section {
    display: grid;
    width: 100%;
    font-weight: 600;
    color: var(--black);
  }
  div {
    padding: 1rem;

    transition: all 0.2s ease-in;
  }
  a {
    color: var(--yellow);
  }
  a:hover {
    color: var(--light-grey);
    font-weight: 900;
  }
  p {
    color: var(--white);
  }
  @media (min-width: 300px) {
    section {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 800px) {
    section {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      padding: 1rem;
      font-size: 1.2rem;
      height: 100vh;
    }
    div {
      padding: 2rem;
      display: grid;
      place-content: center;
      border-radius: 10px;
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
    <p>
      I grew up in Trenton, NJ, and was the first in my family to go to college
    </p>
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
      so I thought...
      <em>Might as well go play some music</em>
    </p>
  </div>
  <div class="bg">
    <p>
      My friend convinced me to check out a “really cool” open mic at a local
      <a href="https://www.facebook.com/trentonsocial" target="_blank">bar</a>
      in my hometown
    </p>
  </div>
  <div class="bg">
    <p>
      It was and I went every week, started waiting tables, making drinks,
      became a part of a beautifully underground arts community, co-founded a
      production
      <a href="https://facebook.com/sixtomidnightps" target="_blank">company</a>
      , and met my
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
      , started slow and kept iterating daily until programming became an
      insatiable pursuit
    </p>
  </div>
  <div class="bg">
    <p>
      Coupling art and code led to an interest in web design and development
    </p>
  </div>
  <div class="bg">
    <p>
      I’m now obsessed with solving my clients’ problems and designing
      responsive solutions that scale
    </p>
  </div>
  <div class="bg">
    <p>
      For more information about my pro, here's my
      <a href="https://salvatoredangelo.github.io/resume" target="_blank">
        resume
      </a>
    </p>
  </div>
</section>
