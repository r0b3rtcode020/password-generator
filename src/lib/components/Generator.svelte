<script>
  import { generatePassword, evaluateStrength } from "../utils/passwordGenerator.js";
  import Password from "./Password.svelte";
  import Slider from "./Slider.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Strength from "./Strength.svelte";
  import Button from "./Button.svelte";

  let lenght = $state(8);
  let options = $state([
    {
      id: "uppercase",
      label: "Include Uppercase Letters",
      checked: true,
    },
    {
      id: "lowercase",
      label: "Include Lowercase Letters",
      checked: false,
    },
    {
      id: "numbers",
      label: "Include Numbers",
      checked: false,
    },
    {
      id: "symbols",
      label: "Include Symbols",
      checked: false,
    },
  ]);
  let password = $state("");
  let strength = $state(0);

  const generate = () => {
    const settings = {
      length: lenght,
      lower: options.find(option => option.id === "lowercase").checked,
      upper: options.find(option => option.id === "uppercase").checked,
      numbers: options.find(option => option.id === "numbers").checked,
      symbols: options.find(option => option.id === "symbols").checked,
    };
    password = generatePassword(settings);
    strength = evaluateStrength(password);
  };
</script>

<div class="generator">
  <Password {password} />
  <div class="generator__options">
    <Slider bind:length={lenght} />
    <div class="checkboxes">
      {#each options as option (option.id)}
        <Checkbox id={option.id} label={option.label} bind:checked={option.checked} />
      {/each}
    </div>
    <div class="generator__actions">
      <Strength {strength} />
      <Button onClick={generate} />
    </div>
  </div>
</div>

<style>
  .generator {
    display: flex;
    flex-direction: column;
    gap: clamp(var(--sp-16), 3.5vw, var(--sp-24));
    width: 100%;
    max-width: 33.75rem;
  }

  .generator__options {
    background-color: var(--clr-gray-800);
    padding-block-end: clamp(
      0rem,
      calc(0rem + (16 - 0) * ((100vw - 375px) / (768 - 375))),
      var(--sp-16)
    );
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    gap: var(--sp-16);
    padding-block: var(--sp-16);
    padding-inline: calc(clamp(var(--sp-16), 4.25vw, var(--sp-32)) + 0.125rem);
  }

  .generator__actions {
    display: flex;
    flex-direction: column;
    gap: clamp(var(--sp-16), 4.25vw, var(--sp-32));
    padding-block: var(--sp-16);
    padding-inline: clamp(var(--sp-16), 4.25vw, var(--sp-32));
  }
</style>
