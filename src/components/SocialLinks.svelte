<style>
  div {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    animation: fadeIn 3s;
    animation-timing-function: cubic-bezier(0.31, 0.44, 0.64, 1.05);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  a {
    margin: 1rem;
    color: var(--dark-grey);
    opacity: 1;
  }
  a:hover,
  i:hover {
    color: var(--yellow);
  }
  i {
    font-size: 2rem;
  }
</style>

<div>
  <a href="mailto:salvatoredangelo@protonmail.com">
    <i class="fas fa-envelope" />
  </a>
  <a href="tel:609-356-4012">
    <i class="fas fa-phone-square-alt" />
  </a>
  <a
    href="https://github.com/salvatoredangelo"
    target="_blank"
    rel="noopener noreferrer">
    <i class="fab fa-github" />
  </a>
  <a
    href="https://linkedin.com/in/salvatoredangelo3"
    target="_blank"
    rel="noopener noreferrer">
    <i class="fab fa-linkedin" />
  </a>
</div>
