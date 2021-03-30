import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import {
    debounce
} from "common/utils";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 200);
        this.itemImgListener = () => {
            this.refresh();
        };
        this.$bus.$on("ItemImageLoad", this.itemImgListener);
        console.log('我是混入');
    }
}