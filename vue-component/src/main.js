import('./bootstrap');
import CurrentTime from './components/CurrentTime.vue';


import { defineCustomElement } from 'vue';

const CurrentTimeComponent = defineCustomElement(CurrentTime);
customElements.define('current-time', CurrentTimeComponent);

// document.body.appendChild(
//   new CurrentTimeComponent()
// )

export default CurrentTimeComponent