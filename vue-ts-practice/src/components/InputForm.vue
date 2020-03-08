<template>
    <input @input="onInput" v-model="content">
</template>

<script lang="ts">
    import{Component,Prop,Emit,Vue} from "vue-property-decorator";

    @Component
    export default class InputForm extends Vue{
        public content="";

        @Prop()
        public value!: string;

        @Emit()
        public input(value: string){
        }

        public onInput(){
            this.input(this.content);
        }

    }
</script>