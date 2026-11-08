export type WorkType = "software" | "prototype" | "experiment" | "research" | "visual";

export type WorkStatus = "released" | "in-progress" | "prototype" | "paused" | "archived";

export type WorkItem = {
  id: string;
  title: string;
  type: WorkType;
  status?: WorkStatus;
  summary?: string;
  dateUpdated?: string;
  cover?: string; // 只允许引用已有 public 路径，不新增素材
  href?: string; // 关联现有 /products/* 详情页
  links?: { demo?: string; source?: string; article?: string };
};
