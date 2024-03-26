import './styles/main.css'
import tailwindLogo from './assets/tailwind.svg'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="flex flex-row place-content-center items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <span class="text-3xl text-blue-800">+</span>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <span class="text-3xl text-blue-800">+</span>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="${tailwindLogo}" class="logo vanilla" alt="Tailwind logo" />
      </a>
    </div>
    <h1>Vite + TypeScript + Tailwind</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
