import { ref } from 'vue';
import { createModel } from '../../../../model/src/index';


export const TestModel = createModel(() => {
    const testValue = ref(1);
    setInterval(() => {
        testValue.value++;
    }, 1000);
    return {
        testValue,
    }
})
