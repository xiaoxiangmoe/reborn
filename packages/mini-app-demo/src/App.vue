<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useModel } from '../../model/src/index';
import { AppModel } from './model';

const appModel = useModel(AppModel);

onLaunch(() => {
    console.log(appModel.a.value);
    console.log("App Launch");
});
onShow(() => {
    console.log("App Show");
});
onHide(() => {
    console.log("App Hide");
});
</script>
<style></style>
