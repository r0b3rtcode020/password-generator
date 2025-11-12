<script>
  const MIN = 8;
  const MAX = 20;
  let { length = $bindable() } = $props();
  let percent = $derived(((length - MIN) / (MAX - MIN)) * 100);
</script>

<div>
  <label for="slider">
    Character Length <span>{length}</span>
  </label>

  <input
    type="range"
    id="slider"
    min={MIN}
    max={MAX}
    step="1"
    bind:value={length}
    style={`background: linear-gradient(to right, var(--clr-green-200) ${percent}%, var(--clr-gray-850) ${percent}%)`}
  />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: clamp(var(--sp-16), 3.5vw, var(--sp-24));
    padding-block-start: clamp(var(--sp-16), 3.5vw, var(--sp-24));
    padding-block-end: clamp(var(--sp-24), 4.5vw, var(--sp-32));
    padding-inline: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    background-color: var(--clr-gray-800);
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: clamp(var(--fs-24), 4.5vw, var(--fs-32));
    color: var(--clr-green-200);
  }

  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 0.5rem;
    border-radius: 0.25rem;
    outline: none;
  }

  /* Track */
  input[type="range"]::-webkit-slider-runnable-track {
    height: 0.5rem;
    border-radius: 0.25rem;
    background: transparent;
  }

  /* Thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--clr-gray-200);
    border: 0.125rem solid var(--clr-gray-200);
    cursor: pointer;
    margin-top: calc((0.5rem - 1.75rem) / 2);
  }

  @media (hover: hover) and (pointer: fine) {
    input[type="range"]::-webkit-slider-thumb:hover {
      background: var(--clr-gray-850);
      border: 0.125rem solid var(--clr-green-200);
    }
  }

  input[type="range"]::-webkit-slider-thumb:active,
  input[type="range"]:focus-visible::-webkit-slider-thumb {
    background: var(--clr-gray-850);
    border: 0.125rem solid var(--clr-green-200);
  }

  /* Firefox */
  input[type="range"]::-moz-range-track {
    height: 0.5rem;
    background: var(--clr-gray-850);
    border-radius: 0.25rem;
  }

  input[type="range"]::-moz-range-progress {
    height: 0.5rem;
    background: var(--clr-green-200);
    border-radius: 0.25rem;
  }

  input[type="range"]::-moz-range-thumb {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--clr-gray-200);
    border: 0.125rem solid var(--clr-gray-200);
    cursor: pointer;
  }

  @media (hover: hover) and (pointer: fine) {
    input[type="range"]::-moz-range-thumb:hover {
      background: var(--clr-gray-850);
      border: 0.125rem solid var(--clr-green-200);
    }
  }

  input[type="range"]::-moz-range-thumb:active,
  input[type="range"]:focus-visible::-moz-range-thumb {
    background: var(--clr-gray-850);
    border: 0.125rem solid var(--clr-green-200);
  }
</style>
