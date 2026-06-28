import { siteCopy } from "../../siteCopy";
import { siteCopySupplement } from "../../siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy["zh-tw"], siteCopySupplement["zh-tw"]);
export default cleanProductPositioning(copy) as typeof copy;
