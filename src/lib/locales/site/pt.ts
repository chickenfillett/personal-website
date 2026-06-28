import { siteCopy } from "../../siteCopy";
import { siteCopySupplement } from "../../siteCopySupplement";
import { cleanProductPositioning, mergeLocaleCopy } from "./utils";

const copy = mergeLocaleCopy(siteCopy.pt, siteCopySupplement.pt);
export default cleanProductPositioning(copy) as typeof copy;
