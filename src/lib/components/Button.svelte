<script>
  let { onClick } = $props();
</script>

<button type="button" onclick={onClick}>
  Generate
  <span>
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#24232C"
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
      />
    </svg>
  </span>
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(var(--sp-16), 3.5vw, var(--sp-24));
    padding-block: var(--sp-16);
    padding-inline: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    width: 100%;
    text-transform: uppercase;
    background-color: var(--clr-green-200);
    color: var(--clr-gray-800);
    border: 0.125rem solid var(--clr-green-200);
    cursor: pointer;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover {
      background-color: transparent;
      color: var(--clr-green-200);
    }

    button:hover svg path {
      fill: var(--clr-green-200);
    }
  }

  button:focus-visible,
  button:active {
    background-color: transparent;
    color: var(--clr-green-200);
  }

  button:focus-visible svg path,
  button:active svg path {
    fill: var(--clr-green-200);
  }
</style>
