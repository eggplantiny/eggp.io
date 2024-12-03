<script setup lang="ts">
import type { Ref } from 'vue'

const props = withDefaults(defineProps<{
  activeTocIds: string[]
  path: string
}>(), {})

const router = useRouter()

const blogPost = computedAsync(() => queryContent(props.path).findOne())
const tocLinks = computed(() => blogPost.value?.body?.toc?.links ?? [])

function onClick(id: string) {
  const el = document.getElementById(id)
  if (el) {
    router.push({ hash: `#${id}` })
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const el = ref<HTMLElement | null>(null)
const tocLinksH1: Ref<Array<HTMLElement>> = ref([])
const tocLinksH2: Ref<Array<HTMLElement>> = ref([])
const tocLinksH3: Ref<Array<HTMLElement>> = ref([])
const tocLinksH4: Ref<Array<HTMLElement>> = ref([])

watchDebounced(
  () => props.activeTocIds,
  (newActiveTocIds) => {
    let moved = false
    newActiveTocIds.forEach((newActiveTocId) => {
      if (moved)
        return

      const h1Link = tocLinksH1.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
      const h2Link = tocLinksH2.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
      const h3Link = tocLinksH3.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
      const h4Link = tocLinksH4.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)

      if (h1Link) {
        h1Link.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      else if (h2Link) {
        h2Link.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      else if (h3Link) {
        h3Link.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      else if (h4Link) {
        h4Link.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      moved = true
    })
  },
  { debounce: 200, immediate: true },
)

function isActiveTocId(id: string) {
  return props.activeTocIds.includes(id)
}

onMounted(() => {
  const hash = router.currentRoute.value.hash
  if (hash) {
    const el = document.getElementById(hash.slice(1))
    if (el) {
      el.scrollIntoView(true)
    }
  }
})
</script>

<template>
  <div ref="el" class="toc max-h-82 overflow-auto max-w-52">
    <h2>Table of contents</h2>
    <nav class="mt-2 flex">
      <ul class="ml-0 pl-4">
        <li
          v-for="{ id, text, children } in tocLinks"
          :id="`toc-${id}`"
          :key="id"
          ref="tocLinksH2"
          class="mb-2 ml-0 cursor-pointer list-none text-md last:mb-0 transition-all"
          @click="onClick(id)"
        >
          <span :class="{ 'active-toc': isActiveTocId(id) }">{{ text }}</span>
          <ul v-if="children" class="my-2 ml-3">
            <li
              v-for="{ id: childId, text: childText, children: grandson } in children"
              :id="`toc-${childId}`"
              :key="childId"
              ref="tocLinksH3"
              class="mb-2 ml-0 cursor-pointer list-none text-sm last:mb-0"
              @click.stop="onClick(childId)"
            >
              <span :class="{ 'active-toc': isActiveTocId(childId) }">{{ childText }}</span>

              <ul v-if="grandson" class="my-2 ml-3">
                <li
                  v-for="{ id: grandsonId, text: grandsonText } in grandson"
                  :id="`toc-${grandsonId}`"
                  :key="grandsonId"
                  ref="tocLinksH4"
                  class="mb-2 ml-0 cursor-pointer list-none text-sm last:mb-0"
                  @click.stop="onClick(grandsonId)"
                >
                  <span :class="{ 'active-toc': isActiveTocId(grandsonId) }">{{ grandsonText }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.active-toc {
  @apply text-indigo-800 dark:text-primary font-bold;
}

@media print {
  .toc {
    @apply hidden;
  }
}
</style>
