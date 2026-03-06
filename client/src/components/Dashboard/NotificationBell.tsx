import { Bell } from "lucide-react";

const notifications = [
  { id: 1, text: "New user registered" },
  { id: 2, text: "New drive posted" },
];

type Notiprops = {
    handleClick: () => void;
}

export default function NotificationBell({handleClick}: Notiprops) {
  return (
    <button onClick={handleClick} className="relative p-2 rounded-lg ">
      <Bell size={15} />
      {notifications.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          {notifications.length}
        </span>
      )}
    </button>
  );
}

export function Dropdown() {
  return (
    <div className="absolute right-0 mt-3 w-80 rounded-xl border shadow-lg">
      <div className="p-4 font-semibold border-b">Notifications</div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.map((n) => (
          <div key={n.id} className="p-4 cursor-pointer">
            {n.text}
          </div>
        ))}
      </div>

      <div className="p-3 text-center border-t text-sm text-blue-600">
        View all
      </div>
    </div>
  );
}
