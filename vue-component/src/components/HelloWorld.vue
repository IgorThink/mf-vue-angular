  <script>
import { defineCustomElement } from 'vue';

let HelloWorld = defineCustomElement({
  styles: [`
      fieldset {
        line-height: 1.9;
        font-family: Inter, sans-serif; 
      }
  `],
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


export default HelloWorld;
</script>