<template>
<nuxt-link :to="'/blog/' +id"
        class="post-featured">
    <article>
        <div class="featured-img"
        :style="{ backgroundImage: 'url('+ featImg +')' }">
            <div class="featured-content">
                <h3>{{ title }}</h3>
                <p>{{ Content }}</p>
            </div>  
        </div>
    </article>
</nuxt-link>
</template>

<script>
export default {
    props:{
        featImg:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required:true
        },
        Content:{
            type: String,
            required: true
        },
        id:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>


