import React, { useState, useCallback, useEffect } from 'react';
import { AddItemButton, QtyBox, Qty, PlusButton, MinusButton, ActionWrapper } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { addItemAction, removeItemAction, updateItemAction } from '@contexts/shopping-cart/actions';

interface Props {
  item: Item | CartItem;
  selectedOptions?: SelectedOptions;
  size?: 'small' | 'large';
  onAddItem: () => void;
}

const AddToCart: React.FC<Props> = ({ item, selectedOptions = {}, onAddItem, size = 'large' }) => {
  const { items, dispatch } = useShoppingCart();

  const getCartItem = () => items.find(({ id }) => id === item.id);

  const [quantity, setQuantity] = useState<number>(1);

  const optionsFormatter = useCallback(
    () => Object.keys(selectedOptions).map((key) => ({ code: key, value: selectedOptions[key] })),
    [selectedOptions],
  );

  const validateOptions = useCallback(
    () => !Object.keys(selectedOptions).find((key) => !Boolean(selectedOptions[key])),
    [selectedOptions],
  );

  const handleClick = () => {
    onAddItem();
    if (validateOptions()) {
      dispatch(addItemAction(item as Item, 1, optionsFormatter()));
    }
  };

  const handleActionClick = (qty: number) => () => {
    const newQty = quantity + qty;
    setQuantity(newQty > 0 ? newQty : 1);
    if (newQty > 0) {
      dispatch(updateItemAction(item.id, newQty));
    } else {
      dispatch(removeItemAction(item.id));
    }
  };

  useEffect(() => {
    const itemExist = getCartItem();
    if (itemExist) {
      setQuantity(itemExist.quantity);
    }
  }, [items]);

  return (
    <div>
      {getCartItem() ? (
        <QtyBox size={size}>
          <ActionWrapper onClick={handleActionClick(-1)}>
            <MinusButton />
          </ActionWrapper>
          <Qty>{quantity}</Qty>
          <ActionWrapper onClick={handleActionClick(1)}>
            <PlusButton />
          </ActionWrapper>
        </QtyBox>
      ) : (
        <AddItemButton onClick={handleClick}>Add To Cart</AddItemButton>
      )}
    </div>
  );
};

export default AddToCart;
