import { siteCopy } from "@/lib/siteCopy";
import { siteCopySupplement } from "@/lib/siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy.fr, siteCopySupplement.fr);
export default cleanProductPositioning(copy) as typeof copy;
