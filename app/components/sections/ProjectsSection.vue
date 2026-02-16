<script setup lang="ts">
import Carousel from 'primevue/carousel'
import PrimeImage from 'primevue/image'
import { PROJECTS } from '~/data'

const selectedProject = ref(PROJECTS[0])
const showAllImages = ref<boolean>(false)

const displayedImages = computed<string[]>(() => {
  if (showAllImages.value) {
    return selectedProject.value?.images ?? []
  }

  return selectedProject.value?.images?.slice(0, 6) ?? []
})

const toggleImages = () => {
  showAllImages.value = !showAllImages.value
}
</script>

<template>
  <section id="projects" class="flex flex-col gap-16 mx-auto container px-6">
    <div class="flex flex-col gap-4 items-center">
      <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
        Wykonane instalacje
      </h2>
      <p class="text-slate-500 text-lg lg:text-xl text-center max-w-3xl">
        Zobacz jak realizujemy nasze projekty na najwyższym poziomie, przykłady naszej fachowości i zaangażowania w każdym detalu.
      </p>
    </div>
    <div class="flex gap-10 flex-col lg:flex-row">
      <div class="flex lg:flex-col gap-3 lg:w-64 flex-wrap">
        <button
          v-for="project in PROJECTS"
          :key="project.name"
          class="flex items-center gap-4 rounded-md px-3 py-2 text-sm cursor-pointer whitespace-nowrap"
          :class="selectedProject?.name
            === project.name ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'"
          @click="selectedProject = project; showAllImages = false"
        >
          <icon :name="project.icon" size="20" />

          <p>{{ project.name }}</p>
        </button>
      </div>

      <div class="lg:hidden">
        <carousel
          :key="selectedProject?.name"
          :value="selectedProject?.images"
          :num-visible="1"
          :num-scroll="1"
          :show-indicators="false"
        >
          <template #item="{ data }: {data: string}">
            <nuxt-img
              class="mx-2 w-full h-[500px] object-cover"
              width="500"
              height="500"
              :src="data"
              :alt="`Zdjęcie wykonanej instalacji – ${selectedProject?.name ?? 'projekt'}`"
              format="webp"
              loading="lazy"
              preview
            />
          </template>
        </carousel>
      </div>

      <div class="flex-1 flex-col gap-8 hidden lg:flex">
        <div v-if="selectedProject" class="flex-1">
          <transition-group
            tag="div"
            class="grid grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr"
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
            move-class="duration-300"
          >
            <prime-image
              v-for="(image, index) in displayedImages"
              :key="index"
              :src="image"
              :alt="`Zdjęcie wykonanej instalacji – ${selectedProject?.name ?? 'projekt'}, fotografia ${index + 1}`"
              preview
              image-class="w-full h-[300px] object-cover rounded-md"
              image-style="aspect-ratio: 16 / 9;"
            />
          </transition-group>
        </div>

        <button
          v-if="selectedProject && selectedProject.images.length > 6"
          class="px-5 py-3 bg-primary text-white font-medium rounded-md self-center cursor-pointer"
          @click="toggleImages"
        >
          {{ showAllImages ? 'Pokaż mniej' : 'Zobacz więcej' }}
        </button>
      </div>
    </div>
  </section>
</template>
