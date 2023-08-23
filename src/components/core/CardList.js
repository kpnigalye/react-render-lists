export const CardList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={`${resourceName}-${index}`}
          {...{ [resourceName]: item }} // author={author}
        />
      ))}
    </>
  );
};
