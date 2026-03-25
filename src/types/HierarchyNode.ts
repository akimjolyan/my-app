import react from "react";
import Team from "./Team";

export default interface HierarchyNode {
    id: string;
    label: string;
    Icon?: any;
    children?: HierarchyNode[];
    teams?: Team[];
    active?: boolean;
}
