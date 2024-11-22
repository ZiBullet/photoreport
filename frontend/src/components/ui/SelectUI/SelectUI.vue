<template>
    <div class="custom-select" @click="toggleDropdown">
        <div class="selected">{{ selectedLabel }}</div>
        <div v-if="isOpen" class="dropdown">
            <div v-for="option in options" :key="option.value" class="dropdown-item" @click="selectOption(option)">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['update:modelValue']);


const isOpen = ref(false);

const selectedLabel = computed(() => {
    const selectedOption = props.options.find(option => option.value === props.modelValue);
    return selectedOption ? selectedOption.label : 'Select an option';
});

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
};
</script>

<style lang="css" scoped>
@import url('./SelectUI.css');
</style>