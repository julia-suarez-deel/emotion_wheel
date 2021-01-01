import i18n from "@/plugins/i18n";
import { capitalize } from "@/utils/string";

export function formatDocumentTitle(titleKey: string): string {
  return capitalize(i18n.t(titleKey).toString());
}
