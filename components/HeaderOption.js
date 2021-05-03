function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`header-option ${selected && "text-blue-500 border-blue-500"}`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
