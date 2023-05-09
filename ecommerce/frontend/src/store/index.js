import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#302e2e',
  isLogoOnlyTexture: true,
  isFullAreaTexture: false,
  logoOnlyDecal: './default-logo.png',
  fullAreaDecal: './default-logo.png',
});

export default state;