<template>
    <div class="end-content">
        <div class="row">
            <div class="col-md-4">
                <p>© {{currentYear}} - azkura </p>
            </div>
            <div class="col-md-4">
                <p>Made with all love</p>
            </div>
            <div class="col-md-4">
                <p>Terms & Privacy</p>
            </div>
        </div> 
    </div>
</template>

<script>
export default {

    data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
    
}
</script>

<style>
.end-content{
    background: #696969;
}
.end-content p{
    color: white;   
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: smaller;
}
</style>


