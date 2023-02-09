<template>
    <headerVue />
    <singleVue />
    <footerVue />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import footerVue from  '../../components/footer.vue';
import singleVue from '../../components/single.vue';
import headerVue from '../../components/header.vue';
import contentVue from '../../components/content.vue';

export default defineComponent({
  components: { headerVue, footerVue, singleVue, contentVue },
  setup() {

  },
})
</script>
