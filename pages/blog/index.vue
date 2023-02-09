<template>
    <headerVue />
    <contentVue />
    <footerVue />
</template>

  <script>
  import { defineComponent } from '@vue/composition-api'
  import footerVue from  '../../components/footer.vue';
  import contentVue from '../../components/content.vue';
  import headerVue from '../../components/header.vue';
  import LeadVue from '../../components/Lead.vue';

  export default defineComponent({
    components: { headerVue, footerVue, contentVue, LeadVue  },
    setup() {

    },
  })
  </script>
