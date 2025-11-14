<script>
  let { strength = 1 } = $props();

  let strengthText = $derived(["Too Weak!", "Weak", "Medium", "Strong"][strength - 1] || "");

  let strengthClass = $derived.by(() => {
    if (strength === 1) return "too-weak";
    if (strength === 2) return "weak";
    if (strength === 3) return "medium";
    if (strength === 4) return "strong";
    return "";
  });
</script>

<div class="strength">
  <p>Strength</p>
  <div class="strength__indicator">
    <p>{strengthText}</p>
    <div class="strength__bar">
      {#each [1, 2, 3, 4] as str, i (i + 1)}
        <div class={str <= strength ? strengthClass : ""}></div>
      {/each}
    </div>
  </div>
</div>

<style>
  .strength {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--sp-16);
    padding-inline: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    text-transform: uppercase;
    background-color: var(--clr-gray-850);
    color: var(--clr-gray-600);
    border: 0.125rem solid var(--clr-gray-850);
  }

  .strength__indicator {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--sp-16);
    color: var(--clr-gray-200);
  }

  .strength__indicator p {
    font-size: clamp(var(--fs-18), 3.25vw, var(--fs-24));
  }

  .strength__bar {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
  }

  .strength__bar div {
    width: 0.625rem;
    height: 1.75rem;
    background-color: transparent;
    border: 0.125rem solid var(--clr-gray-200);
  }

  .strength__bar .too-weak {
    background-color: var(--clr-red-500);
    border: 0.125rem solid var(--clr-red-500);
  }

  .strength__bar .weak {
    background-color: var(--clr-orange-400);
    border: 0.125rem solid var(--clr-orange-400);
  }

  .strength__bar .medium {
    background-color: var(--clr-yellow-300);
    border: 0.125rem solid var(--clr-yellow-300);
  }

  .strength__bar .strong {
    background-color: var(--clr-green-200);
    border: 0.125rem solid var(--clr-green-200);
  }
</style>
