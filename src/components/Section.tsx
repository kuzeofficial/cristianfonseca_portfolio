export const Section = (props: any) => {
  return (
    <div
      id={props.id}
      className={`w-full py-12 leading-loose text-muted ${props.className}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-semibold text-center text-primary">
          {props.title}
        </h2>
        {props.children}
      </div>
    </div>
  );
};
