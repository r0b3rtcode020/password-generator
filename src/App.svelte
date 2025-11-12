<script>
  import Generator from "./lib/Generator.svelte";
</script>

<main>
  <h1>Password Generator</h1>
  <Generator />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    padding-block: clamp(var(--sp-56), 10vw, var(--sp-128));
    padding-inline: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    min-height: 100dvh;
  }

  h1 {
    font-size: clamp(var(--fs-16), 3.5vw, var(--fs-24));
    color: var(--clr-gray-600);
  }
</style>
