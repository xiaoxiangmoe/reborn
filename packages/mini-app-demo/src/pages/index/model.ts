import { ref } from 'vue';
import { createModel } from '../../../../model/src/index';


export const IndexModel = createModel(() => {
    const testValue = ref(1);
    setInterval(() => {
        testValue.value++;
    }, 1000);
    return {
        testValue,
    }
})
