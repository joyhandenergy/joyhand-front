import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#ffffff',
  '--my-black': '#090e18', /* Deep Tech Navy */
  '--my-blue': '#ff7f41', /* Solar Orange as primary accent */
  '--my-red': '#e63946',
  '--my-yellow': '#f4b400',
  '--my-green': '#2a9d8f',
};

export const joyhandTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#6c727f',
  '--gray-base': '#6c727f',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  /* Default button */
  '--default-button-color': '#6c727f',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
});
