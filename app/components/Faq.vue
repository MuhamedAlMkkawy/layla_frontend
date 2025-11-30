<template>
  <div class="card faq_cards">
    <Accordion v-for="i in 6" :key="i" :value="activeAccordion" data-aos="fade-up" :data-aos-delay="i * 200">
      <AccordionPanel :value="i" @click="activeAccordion = i">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
  import Accordion from 'primevue/accordion';
  import AccordionPanel from 'primevue/accordionpanel';
  import AccordionHeader from 'primevue/accordionheader';
  import AccordionContent from 'primevue/accordioncontent';

  const activeAccordion = ref(2)
</script>

<style lang="scss" scoped>
  .faq_cards{
    max-width: 900px;
    margin: 0 auto;
    min-height: 500px;
  }
</style>