<template>
  <div>
    <TheHeader />
    <main class="main-content">
    <nuxt />
    </main>
  <TheFooter /> 
  <EndFoot />
  </div>
</template>

<script>
import EndFoot from '~/components/EndFoot/EndFoot'

import TheHeader from '~/components/TheHeader/TheHeader'
import TheFooter from '~/components/TheFooter/TheFooter'

export default {
  components:{
    TheHeader,
    TheFooter,
    EndFoot
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
