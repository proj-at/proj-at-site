<script setup lang="ts">
const _projat = ref("")
const chars_projat = ['@', 'p', 'r', 'o', 'j', '.', 's', 'b', 's']
const typedDone = ref(false)
const projat_typedclass = ref("animate-pulse height75")

setTimeout(() => {
    for (let i in chars_projat) {
        setTimeout(() => {
            _projat.value = _projat.value.slice(0, -1)
            _projat.value += chars_projat[i] + "|"
            if (i == chars_projat.length - 1) {
                setTimeout(() => {
                    _projat.value = _projat.value.slice(0, -1)
                    setTimeout(() => {
                        typedDone.value = true
                    }, 1000)
                    projat_typedclass.value += " proj-at-typed-animate"
                    projat_typedclass.value = "proj-at-typed-animate height20"
                    // const typedDoneInterval = setInterval(() => {
                    //   if (projat_height.value > 20) {
                    //     projat_height.value -= 5
                    //   } else {
                    //     clearInterval(typedDoneInterval)
                    //   }
                    // }, 10)
                }, 400)
            }
        }, 150 * i)
    }
}, 100)


const projat_height = ref(75)

</script>

<template>
    
    <main class="" style="height: 90vh;">
        <div :class="'pt-12 mt-12 flex justify-center items-center projatbanner ' + projat_typedclass">
            <h1 class="text-center text-6xl md:text-7xl lg:text-8xl font-bold mono-font">{{ _projat }}</h1>
        </div>
        <div v-show="typedDone" class="mainContent ">
            <h1 class="text-center text-xl md:text-2xl font-bold mono-font opacity-80">free subdomain service<br>for
                open-source projects and developers.</h1>

            <div class="mt-20 flex gap-4 flex justify-center items-center"><a
                    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                    href="https://github.com/proj-at/subdomains"><span>Register Now<!-- --></span></a><a
                    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 dark:bg-black/0 text-slate-900 dark:text-slate-100 ring-1 ring-slate-900/10 dark:ring-slate-300/10 hover:bg-white/25 dark:hover:bg-dark/25 hover:ring-slate-900/15 dark:hover:ring-slate-100"
                    href="https://github.com/proj-at/subdomains/issues/new?assignees=&labels=report&projects=&template=report.md&title=Report"><span>Report
                        Abuse<!-- -->
                        <!-- <span aria-hidden="true"
              class="text-black/25 sm:inline ml-2">→</span> -->
                    </span></a></div>


        </div>
    </main>

    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Make Previewing Easier for Developers</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-medium">Proj.sbs was created to make previewing easier for developers. Developers can use Proj.sbs to quickly launch project documents and other open source websites. Nonetheless, we do not recommend use in production environments.</p>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-medium">Proj.at is the team behind Proj.sbs. We want to turn immediate inspiration into real works and projects. It is not just limited to programming, but also combined with artistic creation.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="https://proj.at" class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    Visit Proj.at
                </a>  
                <a
                    class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 dark:bg-black/0 text-slate-900 dark:text-slate-100 ring-1 ring-slate-900/10 dark:ring-slate-300/10 hover:bg-white/25 dark:hover:bg-dark/25 hover:ring-slate-900/15 dark:hover:ring-slate-100"
                    href="https://github.com/proj-at/subdomains"><span>Give a Star on GitHub
                    </span></a>
            </div>
        </div>
    </div>
</section>

</template>

<style scoped>
main {
    width: 100%;
    padding: 0 10px;
}

main .projatbanner.height75 {
    height: 75%;
}

main .projatbanner.height20 {
    height: 47%;
}

main h1.projat {
    text-align: center;
}

/* move from 75% to 47% projat_typedclass */

main .projatbanner.proj-at-typed-animate {
    animation: projat-typed-animate 1s ease-in-out;
}

@keyframes projat-typed-animate {
    0% {
        height: 75%;
    }

    100% {
        height: 47%;
    }
}

main .mainContent {
    animation: main-content-animate 0.8s ease-in-out;
    /* animation-delay: s; */
}

@keyframes main-content-animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}</style>