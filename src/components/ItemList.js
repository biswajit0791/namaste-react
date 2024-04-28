import { useDispatch, useSelector } from "react-redux";
import { RES_IMG_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const itemIds = cartItems.map((item) => item?.card?.info?.id);
  const dispatch = useDispatch();
  const handleAddItem = (item, removeFromCart = false) => {
    dispatch(removeFromCart ? addItem(item) : removeItem(item?.card?.info?.id));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-black text-left flex">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                onClick={() =>
                  handleAddItem(item, !itemIds.includes(item?.card?.info?.id))
                }>
                {!itemIds.includes(item?.card?.info?.id) ? "Add +" : "Remove -"}
              </button>
            </div>
            <img src={RES_IMG_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
