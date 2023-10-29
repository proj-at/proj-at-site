<template>
    <!-- Alpha: Discover Us -->
    <div class="alpha-version discover-us">
        <div class="container lg:px-8 sm:px-7 px-6 max-w-3xl">
            <h1 class="text-5xl _text font-bold py-4"><span class="proj-at">Proj.sbs</span></h1>
            <p class="text-3xl _text font-bold pl-0.5 opacity-80 leading-8 py-1">Redirecting...</p>
            <!-- <div class="my-5 ml-1.5">
                <button class="contact-us-btn" @click="navigateTo('https://github.com/proj-at/subdomains', { external: true, })">Apply Now</button>
            </div> -->
        </div>
    </div>
</template>
<style scoped>
div.alpha-version.discover-us {
    display: flex;
    width: 100%;
    min-height: 20rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}
._text {
    letter-spacing: -.4px;
}
.proj-at {
    color: transparent;
    background-image: linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Sometype Mono', monospace;
}
.contact-us-btn {
    @apply bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-10 px-5 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:hover:bg-sky-400 transition-all;
}
</style>
<script setup lang="ts"> 
  let id = useRoute().params.id;
  // umTrackView(
  //   '/' + id,
  //   'Redirect Link'
  // )
  id = id.join('/')
  console.log(id)
  if (process.client) {
      let r = await $fetch('https://ckygo.deno.dev/api/get?key=' + id)
      r = JSON.parse(r)
      navigateTo(r.url, { external: true, })
  }
</script>
