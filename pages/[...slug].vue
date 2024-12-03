<script lang="ts" setup>
import { tryOnBeforeUnmount } from '#imports'
import TableOfContent from '~/components/atomic/organisms/TableOfContent.vue'

const nuxtContent = ref(null)
const { currentPath, activeTocIds } = useToC()

function useToC() {
  const router = useRouter()
  const activeTocIds = ref<string[]>([])

  const currentPath = computed(() => router.currentRoute.value.path)

  const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
  const observerOptions = reactive({
    root: nuxtContent.value,
    threshold: 0.5,
  } as IntersectionObserverInit)

  function connectObserver() {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting && id) {
          activeTocIds.value.push(id)
        }
        else {
          activeTocIds.value = activeTocIds.value.filter(activeId => activeId !== id)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id], .nuxt-content h4[id]').forEach((section) => {
      observer.value?.observe(section)
    })

    document.querySelectorAll('.nuxt-content table').forEach((table) => {
      table.querySelectorAll('tr').forEach((row) => {
        const cells = row.querySelectorAll('td')
        if (cells.length > 1) {
          (cells[1] as HTMLTableCellElement).style.width = '200px'
        }
      })
    })
  }

  function disconnectObserver() {
    observer.value?.disconnect()
    observer.value = null
  }

  tryOnMounted(() => {
    connectObserver()
    const hash = router.currentRoute.value.hash
    activeTocIds.value = hash ? [hash.slice(1)] : []
  })

  tryOnBeforeUnmount(() => {
    disconnectObserver()
  })

  return {
    activeTocIds,
    currentPath,
  }
}
</script>

<template>
  <div>
    <article>
      <ContentDoc>
        <template #default="{ doc }">
          <div class="nuxt-content prose-base">
            <ContentRenderer ref="nuxtContent" :value="doc" />
          </div>
        </template>
      </ContentDoc>
    </article>

    <TableOfContent
      :path="currentPath"
      :active-toc-ids="activeTocIds"
      class="hidden sm:block fixed top-20 right-8"
    />
  </div>
</template>

<style scoped lang="scss">
article {
  @apply prose dark:prose-invert;
}
</style>
