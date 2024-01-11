<script lang="ts">
  import { onMount } from 'svelte';

  let password: string = '';
  let crackingTime: string;

  const estimateCrackingTime = () => {
    const attemptsPerSecond = 1000000000;
    const characterSet = 94; // 26 lowercase letters + 26 uppercase letters + 10 digits + 32 special characters
    const possibleCombinations = Math.pow(characterSet, new Set(password).size / 1.35);

    const seconds = possibleCombinations / attemptsPerSecond;
    console.log(seconds);
    crackingTime = formatTime(seconds);
    colorBorder(password.length);
  };

  const formatTime = (seconds: number): string => {
    const timeUnits = [
      { unit: 'aeon', divisor: 100 * 1000000 * 365 * 24 * 60 * 60 },
      { unit: 'epoch', divisor: 1000000 * 365 * 24 * 60 * 60 },
      { unit: 'centum millennia', divisor: 100000 * 365 * 24 * 60 * 60 },
      { unit: 'decem millennia', divisor: 10000 * 365 * 24 * 60 * 60 },
      { unit: 'millennia', divisor: 1000 * 365 * 24 * 60 * 60 },
      { unit: 'centuries', divisor: 100 * 365 * 24 * 60 * 60 },
      { unit: 'decades', divisor: 10 * 365 * 24 * 60 * 60 },
      { unit: 'years', divisor: 365 * 24 * 60 * 60 },
      { unit: 'months', divisor: 30 * 24 * 60 * 60 },
      { unit: 'days', divisor: 24 * 60 * 60 },
      { unit: 'hours', divisor: 60 * 60 },
      { unit: 'minutes', divisor: 60 },
      { unit: 'seconds', divisor: 1 },
    ];

    for (const { unit, divisor } of timeUnits) {
      const value = seconds / divisor;
      if (value >= 1) {
        return `${Math.floor(value)} ${unit}`;
      }
    }

    return `${Math.floor(seconds)} seconds`;
  };

  const colorBorder = (seconds: number) => {
    seconds = Math.max(0, Math.min(seconds, 15));

    const t = seconds / 15;
    const red = 255;
    const green = 0;

    const interpolatedRed = Math.round(lerp(255, 0, t));
    const interpolatedGreen = Math.round(lerp(0, 255, t));
    const passwordCrackElement = document.getElementById('password-crack');

    if (passwordCrackElement) {
      passwordCrackElement.style.border = `2px solid rgb(${interpolatedRed}, ${interpolatedGreen}, 0)`;
    }
  };

  function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
  }

  onMount(() => {
    estimateCrackingTime();
  });
</script>

<div id="password-crack">
  <label for="password">Enter the password:</label>
  <input type="password" bind:value={password} on:input={estimateCrackingTime} />
  {#if crackingTime}
    <p>Estimated time to crack: {crackingTime}</p>
  {/if}
</div>

<style>
  #password-crack {
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }

  input {
    padding: 2px 5px;
    margin-left: 10px;
    background-color: rgba(147, 147, 147, 0.462);
  }
</style>
