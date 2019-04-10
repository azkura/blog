<template>
<nuxt-link :to="'/blog/' +id"
        class="blog-news">
    <section>
        <div class="news-img"
        :style="{ backgroundImage: 'url('+ newsImg +')' }">
            <div class="news-content">
                <h3>{{ Maincontent }}</h3>
                <p>{{ newsContent }}</p>
            </div>  
        </div>
    </section>
</nuxt-link>
</template>

<script>
export default {
    props:{
        newsImg:{
            type: String,
            required: true
        },
        Maincontent:{
            type: String,
            required:true
        },
        newsContent:{
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


