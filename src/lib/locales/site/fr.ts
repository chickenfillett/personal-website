import { siteCopy } from "../../siteCopy";
import { siteCopySupplement } from "../../siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy.fr, siteCopySupplement.fr);
export default cleanProductPositioning(copy) as typeof copy;
