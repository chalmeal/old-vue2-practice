import {
    SexType, SubjectType, CommitteeType, ClubType
} from "@/types";

export function sexType (type) {
    const lbl = SexType[type];
    return lbl ? lbl : "-";
}

export function subjectType (type) {
    const lbl = SubjectType[type];
    return lbl ? lbl : "-";
}

export function committeeType (type) {
    const lbl = CommitteeType[type];
    return lbl ? lbl : "-";
}

export function clubType (type) {
    const lbl = ClubType[type];
    return lbl ? lbl : "-";
}