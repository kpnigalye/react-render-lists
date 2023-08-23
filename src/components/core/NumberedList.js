export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {index + 1}
          <ItemComponent
            key={`${resourceName}-${index}`}
            {...{ [resourceName]: item }} // author={author}
          />
        </div>
      ))}
    </>
  );
};
