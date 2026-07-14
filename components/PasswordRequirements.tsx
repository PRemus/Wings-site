import { Check, Circle, X } from "lucide-react";
import {
  PASSWORD_REQUIREMENTS,
  type PasswordPolicyStatus,
} from "@/lib/password-policy";

type PasswordRequirementsProps = {
  id: string;
  status: PasswordPolicyStatus;
  showInvalid: boolean;
};

export function PasswordRequirements({
  id,
  status,
  showInvalid,
}: PasswordRequirementsProps) {
  return (
    <div
      id={id}
      className="mt-2 rounded-xl border border-white/10 bg-slate-950/35 px-3 py-3"
      aria-live="polite"
    >
      <p className="mb-2 text-xs font-medium text-slate-400">
        Password must include:
      </p>
      <ul className="space-y-1.5 text-xs" role="list">
        {PASSWORD_REQUIREMENTS.map((requirement) => {
          const met = status[requirement.key];
          const invalid = showInvalid && !met;
          const Icon = met ? Check : invalid ? X : Circle;
          const stateText = met ? "Met" : invalid ? "Missing" : "Required";

          return (
            <li
              key={requirement.key}
              className={
                met
                  ? "flex items-center gap-2 text-emerald-300"
                  : invalid
                    ? "flex items-center gap-2 text-red-300"
                    : "flex items-center gap-2 text-slate-500"
              }
            >
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>
                <span className="font-medium">{stateText}:</span>{" "}
                {requirement.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
