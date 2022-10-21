<script>
    export default{
        name: 'BaseInput',
        emits: ['update:modelValue'],
        props: {
            name: String,
            label: String,
            modelValue: String,
            type:{
                type:String,
                default: 'text',
            },
        },
    };
</script>

<template>
    <div class="input">
        <label :for="name">
        <p class="name">{{label}}</p>
    </label>
    <input :type="type" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" />
    </div>
</template>

<style>
    .input{
        display: flex;
        flex-direction: column;
    }
</style>