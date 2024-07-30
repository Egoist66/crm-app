<script setup lang="ts">
import {buttonVariants } from '.'
import { cn } from '@/utils';


interface Props  {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="props.as"
    :as="props.as"
    :class="cn(buttonVariants({ variant, size } as any), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
