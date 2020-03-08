<template>
    <textarea>
        <slot></slot>
    </textarea>
</template>

<script lang="ts">
    import{Component,Prop,Vue} from "vue-property-decorator";

    @Component
    export default class TextArea extends Vue{
        @Prop()
        public content?: string;
    }
</script>