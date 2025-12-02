<template>
  <div class="page checkout_page">
    <div class="container">
      <div class="flowers_header">
        Checkout Page
      </div>
      <VeeForm
        :validation-schema="checkoutSchema" 
        class="form" 
        v-slot="{ meta }"
        @handleSubmit="handleSubmit"
      >
        <CustomField 
          name="full_name"
          type="text"
          placeholder="Full Name"
          class="check_input"
          data-aos="fade-up"
          />
        <CustomField
          name="phone_number_1"
          type="number"
          placeholder="Phone Number 1"
          class="check_input"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <CustomField
          name="phone_number_2"
          type="number"
          placeholder="Phone Number 2 ( Optional )"
          class="check_input"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <!-- <CustomField
          name="governorate"
          type="text"
          placeholder="Governorate"
          class="check_input"
        /> -->
        <CustomSelect
          name="governerate"
          :options="[
            { label: 'USA', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'UK', value: 'uk' }
          ]"
          placeholder="Select your Governerate"
          :modelValue="governerate"
          @updateSelectField="governerate = $event"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <CustomField
          name="city"
          type="text"
          placeholder="City"
          class="check_input"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <CustomField
          name="full_address"
          type="text"
          placeholder="Full Address"
          class="check_input"
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <button class="check_button main-btn" data-aos="fade-up" data-aos-delay="600">Apply</button>
      </VeeForm>
    </div>
    <SuccesPopup 
      v-if="showSuccessPopup"
    />
  </div>
</template>

<script setup>
  import { checkoutSchema } from '@/schemas/global';

  const governerate = ref('')

  
  const handleSubmit = (body) => {
    console.log(body)
  }
</script>

<style lang="scss" scoped>
  .form{
    max-width: 700px;
    margin: 0 auto;
    .check_input{
      &:not(:last-of-type){
        margin-bottom: 10px;
      }
    }
  }
</style>