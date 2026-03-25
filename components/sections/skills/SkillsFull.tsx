import React from "react";
import { FrontendDiagnostic } from "./FrontendDiagnostic";
import { RadarMatrix } from "./RadarMatrix";
import { EnvironmentTerminal } from "./EnvironmentTerminal";

export default function SkillsFull() {
  return (
    <div className="flex h-full w-full flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 pb-8">
      {/* Modulo Diagnostico Centrale (2 Colonne Desktop) */}
      <div className="md:col-span-2">
        <FrontendDiagnostic />
      </div>
      
      {/* Radiale Radar Matrix (1 Colonna Desktop) */}
      <div className="md:col-span-1">
        <RadarMatrix />
      </div>
      
      {/* Env Terminal Wide Array (Full Width Desktop) */}
      <div className="md:col-span-3">
        <EnvironmentTerminal />
      </div>
    </div>
  );
}
