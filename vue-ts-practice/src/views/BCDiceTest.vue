<template>
  <div class ="bcdice">
    <p>
      <InputForm v-model="FormText"></InputForm>
    </p>
    <p>
      <InputForm v-model="FormText2"></InputForm>
    </p>
    <p>
      <SubmitButton @click="onSubmitButtonClicked">送る</SubmitButton>
    </p>
      <p>{{contentText}}</p>
  </div>
</template>

<script lang="ts">
  import{Vue, Prop, Component} from 'vue-property-decorator';
  import SubmitButton from "@/components/SubmitButton.vue";
  import InputForm from "@/components/InputForm.vue";
  import TextArea from "@/components/TextArea.vue";
  import {Action, Mutation, mapState} from 'vuex'
  import { BCDice ,BCDicesState} from '../store/types';

  @Component({
    components:{
      SubmitButton,
      InputForm
    }
  })
  export default class BCDiceTest extends Vue{
    public FormText="";
    public FormText2="";
    private payload={command:"",system:"",id:"",index:0};
    public contentText="まだないよ";

    private arraysize =  this.$store.getters['bcdices/arraysize'];

    public async created(){
      this.$store.dispatch('bcdices/add');
    }

    public async onSubmitButtonClicked(){//引数で受け取る
      this.arraysize =  this.$store.getters['bcdices/arraysize']
      if(!this.FormText){
        window.alert('なにか入力して❤');
        return;
      }
      this.payload={command:this.FormText,
                    system:this.FormText2,
                    id:String(0),
                    index:0};
      await this.$store.commit("bcdices/writeCommand",this.payload);
      await this.$store.dispatch("bcdices/post",0);
      this.contentText=String(this.$store.state.bcdices.bcdices[0].response);
    }
  }
</script>