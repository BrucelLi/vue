<template>
    <div id="content">
        <div id="example-3">
            <button @click="show = !show">
                Toggle render
            </button>
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
            >
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data(){
            return {
                show:true
            }
        }
    }
</script>
<style scoped lang="scss">
    #content{
        height: 100rem;
        width: 100%;
        background-color: red;
        float: left;
    }
</style>