<template>
  <div class="select-wrap">
    <div class="select">
      <select
        :name="name"
        :id="name"
        :value="selectedValue"
        :title="name"
        @change="emit('updateSelectField', $event.target.value)"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
  // Props
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }, // expects [{ label, value }]
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    } // optional if you want v-model support
  })

  // Emit
  const emit = defineEmits(['updateSelectField'])


  const selectedValue = ref('')
  watchEffect(()=>{
    if(props.modelValue){
      selectedValue.value = props.modelValue
    }
  })
</script>

<style scoped>
  .select-wrap{
    background: #e4e4e499;
    margin-bottom: 10px; 
    border-radius: 8px;
    overflow: hidden;
    color: #333;
    padding-inline: 10px;
    select{
      padding-block: 25px;
    }
  }
</style>
