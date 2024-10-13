"use client";

import { useState } from "react";
import HeaderTail from "../Header/HeaderTail";
import Container from "../MainContainer/page";

import { useQueryState } from "nuqs";

type Props = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: Props) => {
  const [searchBuild, setSearchBuild] = useQueryState("build", {
    defaultValue: "",
  });
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "",
  });

  const handleSearchBuild = (value: string) => {
    setSearchBuild(value);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };
  return (
    <>
      <HeaderTail
        searchBuild={searchBuild}
        handleSearchBuild={handleSearchBuild}
        handleCategory={handleCategory}
      />
      <Container>{children}</Container>
    </>
  );
};
