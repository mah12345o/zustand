
import useBookStore  from "@/store/page";
export const ZustandFile = () => {
    const toggle = useBookStore((state) => state.stateupdate);
    return toggle
}


