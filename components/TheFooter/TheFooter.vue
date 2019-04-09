<template>
<div class=" container">
    <div class="lab">
        <LabEdit >Reviews</LabEdit>
         <LabEdit >Reviews</LabEdit>
          <LabEdit>Reviews</LabEdit>

    </div>
    
    <div class="link-content">
        
        <TheFooterReview />
    </div>    
</div>
</template>

<script>

import LabEdit from '~/components/LabEdit/LabEdit'
import TheFooterReview from '~/components/TheFooterReview/TheFooterReview'

export default {
    components:{
        TheFooterReview,
        LabEdit
    }
    
}
</script>

<style>
.container{
    position: fixed;
    width: 100%;
    height: auto;
    background: #06456B;
    bottom: 0;
}
h3{
    color: white;
    
}
.lab{
  /*  display: flex;
    flex-direction: row; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 1rem;
    padding: 0.3rem;

}


</style>

