import { mount } from 'svelte'
import '../src/tailwind.css'
import Page from "../src/routes/+page.svelte"

const app = mount(Page, {
  target: document.getElementById('app'),
})

export default app
