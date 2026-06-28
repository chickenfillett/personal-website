import { siteCopy } from "@/lib/siteCopy";
import { siteCopySupplement } from "@/lib/siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy["zh-tw"], siteCopySupplement["zh-tw"]);
export default cleanProductPositioning(copy) as typeof copy;
