"use client";
import TitleText from "../../ui/TitleText";
import { SAppHeader, SFlexBox, SInner } from "./style";

const AppHeader = () => {
  return (
    <div>
      <SAppHeader>
        <SInner>
          <SFlexBox>
            <TitleText tag="h1">スケジュール管理アプリ</TitleText>
          </SFlexBox>
        </SInner>
      </SAppHeader>
    </div>
  );
};

export default AppHeader;
