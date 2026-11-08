/**
 * 健康检查 / VPS 联动锚点（保留，行为不变）。
 *
 * 静态导出阶段它只是一个静态 JSON；将来若部署 services/analytics 休眠服务端，
 * 可在本路由同域扩展更多健康检查，而前端埋点无需改动（端点由环境变量注入）。
 * 详见 docs/ANALYTICS.md 与 services/analytics/README.md。
 */
import { runtimeInfo } from "@/server/runtime";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    ...runtimeInfo,
  });
}
