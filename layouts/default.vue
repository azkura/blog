<template>
  <div>
    <TheHeader />
    <ToPics />
    <main class="main-content">
    <nuxt />
    </main>
    <TheFooter /> 
    <EndFoot />
    </div>
</template>

<script>

import ToPics from '~/components/ToPics/ToPics'
import EndFoot from '~/components/EndFoot/EndFoot'
import TheHeader from '~/components/TheHeader/TheHeader'
import TheFooter from '~/components/TheFooter/TheFooter'

export default {

  components:{
    TheHeader,
    TheFooter,
    EndFoot,
    ToPics,
  },

  asyncData(context){
    return context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ?'draft' : 'published', starts_with: 'info/'
    }).then( res => {
      return {
        infos:res.data.stories.map(bn => {
          return {
            id: bn.slug,
            newsImg: bn.content.thumbnail,
            Maincontent: bn.content.title,
            newsContent: bn.content.content
          }
        })
      }
    })
  }
}

</script>

<style>

*{
  box-sizing: border-box;
}
body{
  font-family: 'Quicksand', sans-serif;
  margin: 0;
}
.main-content{
  margin-top: 5rem;
  margin-bottom: 10rem;
}

</style>
