import type { NextPage } from "next";
import { memo } from "react";
import Section from "./section";
import Workflow from "./workflow";

const Main: NextPage = memo(() => {
  return (
    <form className="m-0 w-[1128px] bg-colors-background-bg-primary max-w-full overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-12 box-border leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="w-[278px] hidden flex-row items-center justify-start py-0 pr-6 pl-0 box-border">
              <div className="h-7 flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="rounded-spacing-sm flex flex-row items-start justify-start p-1">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/homeline.svg"
                  />
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronright.svg"
                />
                <div className="self-stretch flex-1 rounded-spacing-sm flex flex-row items-center justify-center py-spacing-xs px-spacing-md">
                  <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left">
                    Dashboard
                  </div>
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronright.svg"
                />
                <div className="self-stretch rounded-spacing-sm hidden flex-row items-center justify-center py-spacing-xs px-spacing-md">
                  <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left">
                    ...
                  </div>
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevronright.svg"
                />
                <div className="self-stretch rounded-radius-sm hidden flex-row items-center justify-center py-spacing-xs px-spacing-md">
                  <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left whitespace-nowrap">
                    Another link
                  </div>
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevronright.svg"
                />
                <div className="rounded-spacing-sm bg-colors-background-bg-secondary flex flex-row items-center justify-center py-spacing-xs px-spacing-md">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left">
                    Sources
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[20px_14px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[320px] max-w-full">
                <h1 className="m-0 self-stretch relative text-11xl leading-[38px] font-semibold font-text-sm-semibold text-colors-text-text-primary-900 text-left mq450:text-lg mq450:leading-[23px] mq800:text-[24px] mq800:leading-[30px]">
                  文档批量转化
                </h1>
                <div className="w-[445px] h-12 relative text-base leading-[24px] font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left hidden max-w-full">
                  Manage your team members and their account permissions here.
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px] mq450:flex-wrap">
                <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left">
                      Tertiary
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-secondary-color-button-secondary-color-border">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder1.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-color-button-secondary-color-fg text-left">
                      Secondary
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder1.svg"
                  />
                </div>
                <button className="cursor-pointer py-2 px-[13px] bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/uploadcloud01.svg"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left inline-block min-w-[88px]">
                      Upload excel
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder2.svg"
                  />
                </button>
                <button className="cursor-pointer py-2 px-[13px] bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/download04.svg"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-colors-background-bg-primary text-left inline-block min-w-[107px]">
                      Download excel
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder3.svg"
                  />
                </button>
              </div>
              <div className="h-11 w-80 hidden flex-col items-start justify-start gap-[8px] min-w-[200px] max-w-[320px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="w-[47px] relative text-sm leading-[20px] font-medium font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left hidden">
                    Search
                  </div>
                  <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[13px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/searchlg.svg"
                      />
                      <div className="self-stretch flex-1 relative text-base leading-[24px] font-text-sm-semibold text-colors-text-text-quaternary-500 text-left overflow-hidden text-ellipsis whitespace-nowrap">
                        Search
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-5 relative text-sm leading-[20px] font-text-sm-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg text-left hidden">
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/divider.svg"
            />
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
        <Section />
        <Workflow />
      </section>
    </form>
  );
});

export default Main;
