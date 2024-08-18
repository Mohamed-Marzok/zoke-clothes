import { useState } from "react";
import CircleColor from "./ui/CircleColor";

export default function ReminderCircle({ reminder }: { reminder: string[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {reminder && reminder.length > 0 && (
        <div className="relative">
          <p
            className={`font-semibold ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            +{reminder.length}
          </p>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`absolute top-0 right-0 flex flex-col gap-1 transition-opacity duration-200 ${
              isHovered ? "flex" : "hidden"
            }`}
          >
            {reminder.map((color) => (
              <CircleColor key={color} color={color} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
