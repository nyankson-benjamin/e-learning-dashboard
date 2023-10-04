// useWindowWidth.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useWindowWidth() {
  // Create a ref to store the current window width
  const windowWidth = ref(window.innerWidth);

  // Create a function to update the window width
  function updateWindowWidth() {
    windowWidth.value = window.innerWidth;
  }

  // Add an event listener when the component is mounted
  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  // Remove the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });

  // Return the window width ref
  return windowWidth;
}
