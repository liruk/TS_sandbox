<template>
    <button @click="onClick">Reset</Button>
</template>

<script lang="ts">
    import{Component, Emit, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ResetButton extends Vue{
        private initialValue!: string;

        @Prop()
        public value!: string;

        /** ライフサイクルフック */
        public created(){
            this.initialValue=this.value;
        }

        @Emit()
        public input(value:string){

        }
        public onClick(){
            this.input(this.initialValue)
        }
    }
</script>