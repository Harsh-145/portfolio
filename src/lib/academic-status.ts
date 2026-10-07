import { unstable_cache } from "next/cache";
import {
  loadEngineeringTerms,
  resolveAcademicStatus,
} from "./academic-calendar.mjs";

const getTerms = unstable_cache(loadEngineeringTerms, ["gtu-be-2026-27-v1"], {
  revalidate: 86400,
});

export async function getAcademicStatus() {
  try {
    return resolveAcademicStatus(await getTerms());
  } catch {
    // Keep the verified local snapshot if GTU is offline or changes its PDF layout.
    return resolveAcademicStatus([]);
  }
}
