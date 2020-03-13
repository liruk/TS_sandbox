<template>
  <button @click="onClick" :power="power" :name="name">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class LifeCutter extends Vue {
  @Prop() private power!: number;
  @Prop() private name!: string;

  @Emit()
  private click(power: number){
  }

  public onClick(){
    this.click(this.power);
  }

}
</script>
