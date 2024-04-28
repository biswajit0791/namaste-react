import ItemList from "./ItemList";

const RestaurantCategory = ({ catData, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {catData?.title} ({catData?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={catData?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
