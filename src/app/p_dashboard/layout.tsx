const layout = ({
  children,
  article,
  notification,
  quiz,
}: {
  children: React.ReactNode;
  article: React.ReactNode;
  notification: React.ReactNode;
  quiz: React.ReactNode;
}) => {
  return (
    <>
     {children}
      <div className="grid h-screen w-full grid-cols-2 gap-2">
        {article}
        {notification}
        {quiz}
      </div>
    </>
  );
};

export default layout;
