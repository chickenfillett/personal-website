import { siteCopy } from "@/lib/siteCopy";
import { siteCopySupplement } from "@/lib/siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy.ko, siteCopySupplement.ko);
export default cleanProductPositioning(copy) as typeof copy;
