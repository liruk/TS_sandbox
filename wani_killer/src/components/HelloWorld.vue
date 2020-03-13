<template>
  <div class="hello">
    <ul>
      <li v-for="item in powers" :key="item.value">
        <LifeCutter :power="item.value" :name="item.name" @click="onLifeCutterClicked">{{item.name}}日進める</LifeCutter>
      </li>
    </ul>
    <p v-if="alive">死まで後{{life}}日</p>
    <p v-if="!alive">死から{{0-life}}日</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LifeCutter from '@/components/atom/LifeCutter.vue'

@Component({
  components:{
    LifeCutter
  }
})


export default class HelloWorld extends Vue {
  private powers=[
    {value:1, name:"1"},
    {value:5, name:"5"},
    {value:10, name:"10"},
    {value:100, name:"100"}];

  private life = 100;
  private alive = true;

  private onLifeCutterClicked(power: number){
    this.life -= power;
    if(this.life <= 0){
      this.alive = false;
    }
  }
  
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
