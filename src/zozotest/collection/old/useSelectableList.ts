import React, {useCallback, useRef} from 'react';

export const useSelectableList = setData => {
  const setDataRef = useRef(setData);

  const onSelectedStateChanged = useCallback(
    (index: number, isSelected: boolean) => {
      setDataRef.current(state => {
        let newState = [...state];
        newState[index].isSelected = isSelected;
        return newState;
      });
    },
    [],
  );

  const getSelectedItems = useCallback(data => {
    return data.filter(item => item.isSelected);
  }, []);

  return {onSelectedStateChanged, getSelectedItems};
};
