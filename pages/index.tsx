import SearchBar from "components/molecules/SearchBar/SearchBar";
import BaseLayout from "components/template/BaseLayout/BaseLayout";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const Index = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (input: string) => {
    if (input === "") {
      alert("입력하세요");
      return;
    }
    router.push({
      pathname: `/Search`,
      query: { keyword: input },
    });
  };

  const handleSubmit = () => {
    handleSearch(input);
  };

  const onKeyUp = useCallback((e) => {
    const keyword = e.target.value;
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        alert("입력하세요");
        return;
      }
      handleSearch(keyword);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BaseLayout>
      <SearchBar
        onClick={handleSubmit}
        onChange={(e) => handleChange(e)}
        onKeyUp={onKeyUp}
        placeholder="Github Repository를 검색하세요"
      />
    </BaseLayout>
  );
};

export default Index;
