interface TabNavItemProps {
  id?: string;
  title: string;
  activeTab: string;
  // setActiveTab: function;
}

export const TabNavItem = ({
  id,
  title,
  activeTab,
}: // setActiveTab,
TabNavItemProps) => {
  const handleClick = () => {
    // setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};
