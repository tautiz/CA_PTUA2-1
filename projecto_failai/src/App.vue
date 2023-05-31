<template>
  <header>
    <nav data-state="inactive"></nav>
  </header>
  <main class="main_content center">
    <div id="apps"></div>
    <div class="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 bg-gray-200 px-8 py-12">
      <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
          <svg class="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stop-color="#2397B3" offset="0%"></stop>
                <stop stop-color="#13577E" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                <stop stop-color="#73DFF2" offset="0%"></stop>
                <stop stop-color="#47B1EB" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path
                  d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
                  fill="url(#a)" transform="translate(1 1)"></path>
              <path
                  d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
                  fill="url(#b)" transform="translate(1 1)"></path>
              <path
                  d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  fill="#FFF"></path>
            </g>
          </svg>
        </div>
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1>{{ name }}</h1>
      <ButtonCounter/>
    </div>
  </main>
  <aside>
    <div class="relkama">TAVO reklama</div>
    <div>
      <hr>
      <input type="button" value="spausti 1" class="btn">
      <input type="button" value="spausti 2" onclick="showAlert('Testas')">

      <hr>
      <input type="text" id="duomenys">
      <br>
      <button id="store_data">Saugoti</button>
      <button id="read_data">Skaityti</button>
    </div>
  </aside>
  <footer>
    <span>© 2023 - visos teisės saugomos</span>
  </footer>
</template>

<script>
import Main from './main.js'
import ButtonCounter from './Components/ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  },
  data: function () {
    new Main();
    return {
      name: 'Hello World!!!!',
    }
  },
};
</script>

<style global>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>

<style src="./css/layout.css"></style>
<style src="./css/tablets_layout.css"></style>
<style src="./css/design.css"></style>