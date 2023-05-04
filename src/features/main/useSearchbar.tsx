import { useCallback, useState } from "react";

const useSearchbar = () => {
  const [keyword, setKeyword] = useState("");
  const [isAutocomplete, setAutocomplete] = useState(false);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    []
  );

  const onClear = useCallback(() => {
    setKeyword("");
  }, []);

  const onOpenAutoComplete = useCallback(() => {
    setAutocomplete(true);
  }, []);

  const onCloseAutoComplete = useCallback(() => {
    setAutocomplete(false);
  }, []);

  return {
    keyword,
    isAutocomplete,
    handleChangeInput,
    onClear,
    onOpenAutoComplete,
    onCloseAutoComplete,
  };
};

export default useSearchbar;
