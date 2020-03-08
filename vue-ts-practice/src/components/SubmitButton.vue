<template>
    <button @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import{Component,Emit,Vue} from "vue-property-decorator";

    @Component
    export default class SubmitButton extends Vue{

        @Emit()
        public click(){
        }

        public onClick(){
            this.click();
        }
    }
</script>