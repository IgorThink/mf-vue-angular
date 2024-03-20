  <script>
import { defineCustomElement } from 'vue';

let HelloWorld = defineCustomElement({
  styles: [],
    template:`
      <div class="hello">
        hello from vue App
      </div>
    `,
    data() {
      return {
      };
    },
    methods: {
    },
  });
  // console.log(new HelloWorld())
  if (!customElements.get('vue-app')) {
    HelloWorld = customElements.define("vue-app", HelloWorld);
  }

  // export default Settings;
export default HelloWorld;
</script>