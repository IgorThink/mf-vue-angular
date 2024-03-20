<script>
import Settings from "./components/Settings.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  template: `<h1>Demonstration of Settings component</h1>`
}

document.body.appendChild(
  new Settings(),
  new HelloWorld()
)
document.body.appendChild(
  new HelloWorld()
)
</script>