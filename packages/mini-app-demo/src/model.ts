import { ref } from 'vue';
import { createModel } from '../../model/src/index';


export const AppModel = createModel(() => {
    const a = ref(1);
    setInterval(() => {
        a.value++;
    }, 1000);
    return {
        a,
    }
})
