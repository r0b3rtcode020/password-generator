<script>
  import Password from "./Password.svelte";
  import Slider from "./Slider.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Strength from "./Strength.svelte";
  import Button from "./Button.svelte";
</script>

<div class="generator">
  <Password />
  <div class="generator__options">
    <Slider />
    <div class="checkboxes">
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </div>
    <Strength />
    <Button />
  </div>
</div>
