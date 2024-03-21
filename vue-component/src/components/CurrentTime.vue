<template>
  <div><slot name="prefix" /> {{ displayTime }}, {{sameValue}}</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  timeZone: {
    type: String,
    default: 'America/Los_Angeles',
  },
  sameValue: {
    type: String,
    default: 'Vue VALUE'
  }
});

console.log(localStorage.name)

const emit = defineEmits(['datechange']);

const currentDateTime = ref(new Date());
const displayTime = computed(() =>
  currentDateTime.value.toLocaleString('en-US', {
    timeZone: props.timeZone,
  })
);

setInterval(() => {
  currentDateTime.value = new Date();
  emit('datechange', displayTime);
}, 1000);
</script>
