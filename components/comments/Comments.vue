<script setup lang="ts">
import dayjs from 'dayjs';
import type { IDeal } from '~/types/deals.types';

const props = defineProps<{
    cardId: string
}>()

const {refetch, data, isLoading} = useComments(props.cardId)
const {comment, createComment, isPending} = useCreateComment(refetch)

const card = data as unknown as IDeal
const input = ref<HTMLInputElement | null>(null)



</script>


<template>
    
    
        <UiInput
            @keyup.enter="createComment()" 
            type="text" 
            v-model="comment" 
            placeholder="Add a comment" 


        />


        <div class="text-center text-lg" v-if="isLoading">Comments Loading...</div>

        <div v-if="card?.comments.length">
            <div class="flex items-start mt-5" v-for="comment in card.comments" :key="comment.$id">
                <Icon name="radix-icons:chat-bubble" class="text-3xl" />
                <div :style="{overflowWrap: 'anywhere'}" class="border-border overflow-hidden bg-black/20 rounded p-3 w-full">
                   <p class="text-sm  mb-2">Comment {{ dayjs(comment.$created_at).format('HH::mm') }}</p>
                   <p class="text-wrap">{{ comment.text }}</p>

                </div>
            </div>
        </div>

        <div class="mt-5" v-else>
            No comments yet...
        </div>
    
</template>



<style scoped>

p {
    text-overflow: ellipsis;
    white-space: wrap;

}

</style>