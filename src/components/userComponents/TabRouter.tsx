import { tabs } from "./_data";

interface TabRouterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabRouter({ activeTab, onTabChange }: TabRouterProps) {
  return (
    <div id="tab-router">
      {tabs.map((item, idx) => (
        <span
          key={idx}
          className={`tab-item ${item.tab === activeTab ? "active" : ""}`}
          onClick={() => onTabChange(item.tab)}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}
