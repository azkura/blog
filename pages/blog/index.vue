<template>
  <section id="post">
    <PostPreview
    v-for="post in posts" 
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id"/>
  </section>
</template>

<script>
import PostPreview from '~/components/blog/PostPreview'

export default {

  components:{
    PostPreview
  },

  asyncData(context){
    return context.app.$storyapi.get("cdn/stories",{
      version: "draft", starts_with: "blog/"
    }).then(res => {
      return  {
        posts: res.data.stories.map( bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail,
          }
        })
      }
    })
  }

/*  data(){
    return {
      posts:[
        {
        title: 'my first post',
        previewText: 'hello glad to post my first opinion in this blog',
        thumbnailUrl: 'https://www.seriouseats.com/recipes/images/2014/09/20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-1500x1125.jpg',
        id: 'my first post'
      },
      {
        title: 'my second post',
        previewText: 'hello glad to post my second opinion in this blog',
        thumbnailUrl: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
        id: 'my second post'
      }
      ]
    }
  }*/
}
</script>

<style scoped>

#post{
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem){
  #post{
    flex-direction: row;
  }
}

</style>