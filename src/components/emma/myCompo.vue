<template>
    <div>
        컴포넌트 만들었다
        a : {{ a }}
        <span @click="$emit('emma')"> b : {{ b }} </span>
    </div>
</template>

<script>
export default {
    props : {
        a : String,
        b : Number,
        c : Function
    },
    emits : [ "emma" ],
    mounted(){

    }
}
</script>