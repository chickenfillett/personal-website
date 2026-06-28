import { siteCopy } from "../../siteCopy";
import { siteCopySupplement } from "../../siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy.es, siteCopySupplement.es);
export default cleanProductPositioning(copy) as typeof copy;
