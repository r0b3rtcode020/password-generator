<script>
  let { id, label, checked = $bindable() } = $props();
</script>

<div class="form-group">
  <input type="checkbox" {id} bind:checked />
  <label for={id}>{label}</label>
</div>

<style>
  .form-group input[type="checkbox"] {
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;
    padding: 0;
    margin: -0.0625rem;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .form-group label {
    position: relative;
    padding-left: calc(clamp(var(--sp-16), 3.5vw, var(--sp-24)) + 1.25rem);
    cursor: pointer;
  }

  .form-group label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    border: 0.125rem solid var(--clr-gray-200);
    background: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    .form-group label:hover::before {
      border-color: var(--clr-green-200);
    }
  }

  .form-group label:active::before {
    border-color: var(--clr-green-200);
  }

  .form-group input[type="checkbox"]:focus-visible + label::before {
    outline: 0.125rem solid var(--clr-green-200);
    outline-offset: 0.125rem;
  }

  .form-group input[type="checkbox"]:checked + label::before {
    background: var(--clr-green-200);
    border-color: var(--clr-green-200);
  }

  .form-group input[type="checkbox"]:checked + label::after {
    content: "";
    position: absolute;
    left: 0.1875rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.875rem;
    height: 0.875rem;
    background-image: url("../assets/icon-check.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    pointer-events: none;
  }
</style>
