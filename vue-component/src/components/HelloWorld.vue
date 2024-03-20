  <script>
import { defineCustomElement } from 'vue';

const HelloWorld = defineCustomElement({
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
customElements.define("vue-app", HelloWorld);

export default HelloWorld;
</script>