import Pocketbase from "pocketbase";
import { ref } from "vue";

export const usePocketBase = () => {
    const pb = ref(null);

    pb.value = new Pocketbase("http://127.0.0.1:8090")

    return{
        pb,
    };
};