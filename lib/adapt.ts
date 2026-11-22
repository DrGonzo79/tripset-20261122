import demo from "@/data/demo.json";
export type Adapted = {id:string;original:string;name:string;scheme:string;why:string;status:"matched"|"review"};
export function adaptWorkout(selected:string[]): Adapted[] {
  return demo.workout.map((move) => {
    const match = move.alternatives.find((alt) => alt.equipment.every((item) => selected.includes(item)));
    if (!match) return {id:move.id,original:move.name,name:"Coach review required",scheme:"Do not improvise",why:`No rule-approved ${move.intent.toLowerCase()} option for this equipment.`,status:"review"};
    return {id:move.id,original:move.name,name:match.name,scheme:match.scheme,why:match.why,status:"matched"};
  });
}
