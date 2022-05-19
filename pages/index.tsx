import SearchBar from "components/molecules/SearchBar/SearchBar";
import BaseLayout from "components/template/BaseLayout/BaseLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const Index = () => {
  const [repoInput, setRepoInput] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const router = useRouter();

  const handleChange = (e) => {
    setRepoInput(e.target.value);
  };
  const handleUserChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleRepoSearch = async (input: string) => {
    if (input === "") {
      alert("입력하세요");
      return;
    }
    router.push({
      pathname: `/Search`,
      query: { keyword: input, limit: 20 },
    });
  };

  const handleUserSearch = async (input: string) => {
    if (input === "") {
      alert("입력하세요");
      return;
    }
    router.push(`user/${input}`);
  };

  const onKeyUp = useCallback((e) => {
    const keyword = e.target.value;
    console.log("etat", e.target.placeholder);
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        alert("입력하세요");
        return;
      }
      if (e.target.placeholder === "Github Repository를 검색하세요") {
        handleRepoSearch(keyword);
      } else {
        handleUserSearch(keyword);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BaseLayout>
      <SearchBar
        onClick={() => handleRepoSearch(repoInput)}
        onChange={(e) => handleChange(e)}
        onKeyUp={onKeyUp}
        placeholder="Github Repository를 검색하세요"
      />
      <SearchBar
        onClick={() => handleUserSearch(userInput)}
        onChange={(e) => handleUserChange(e)}
        onKeyUp={onKeyUp}
        placeholder="Github User 이름을 검색하세요"
      />

      <Link
        href={{
          pathname: "/userPage",
          query: { keyword: userInput },
        }}
      >
        <a>이동</a>
      </Link>
    </BaseLayout>
  );
};

export default Index;
