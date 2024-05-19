import type { NextPage } from "next";
import { memo } from "react";
import CodeSnippet from "./code-snippet";

const Workflow: NextPage = memo(() => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start py-8 px-0 box-border min-w-[480px] max-w-full ml-[-2px] text-left text-sm text-colors-text-text-quaternary-500 font-text-sm-semibold mq675:min-w-full mq450:pb-5 mq450:box-border mq800:pb-[21px] mq800:box-border">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border gap-[9px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg text-colors-text-text-primary-900">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-center gap-[4px] max-w-full">
              <div className="self-stretch relative leading-[28px] font-semibold">
                {" "}
                workflow
              </div>
              <div className="self-stretch h-5 relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden overflow-hidden text-ellipsis whitespace-nowrap">
                Manage your team members and their account permissions here.
              </div>
            </div>
            <div className="h-10 hidden flex-row items-center justify-start gap-[12px] max-w-full text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
              <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Tertiary
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-component-colors-components-buttons-secondary-color-button-secondary-color-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-color-button-secondary-color-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder1.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Secondary
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder1.svg"
                />
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    View in Schema
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Primary
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/dotsvertical.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[0]"
            alt=""
            src="/divider2.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[16px] max-w-full mq675:flex-wrap">
          <div className="h-10 w-[355px] box-border flex flex-col items-start justify-start pt-[11px] px-0 pb-0 max-w-full shrink-0 border-b-[1px] border-solid border-colors-border-border-secondary">
            <div className="w-[108px] flex flex-row items-start justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-center pt-0 px-spacing-xs pb-[9px] text-component-colors-components-buttons-secondary-color-button-secondary-color-fg border-b-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[39px]">
                  Step1
                </div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-8 flex-1 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border font-text-sm-semibold font-semibold text-sm text-colors-text-text-quaternary-500 min-w-[29px]"
                placeholder="Step2"
                type="text"
              />
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-[3px] pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Violations
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold whitespace-nowrap">
                  About the client
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Notes
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Billing
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Email
                </div>
              </div>
              <div className="h-8 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border gap-[8px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Notifications
                </div>
                <div className="h-[22px] rounded-radius-full bg-colors-background-bg-secondary box-border flex flex-row items-center justify-start py-spacing-xxs px-[7px] text-center text-xs text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-colors-border-border-secondary">
                  <div className="self-stretch relative leading-[18px] font-medium">
                    2
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Integrations
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start pt-0 px-spacing-xs pb-spacing-lg">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  API
                </div>
              </div>
            </div>
          </div>
          <div className="w-[214px] flex flex-row items-center justify-start gap-[14px] shrink-0 text-component-colors-components-buttons-tertiary-button-tertiary-fg">
            <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Tertiary
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-component-colors-components-buttons-secondary-color-button-secondary-color-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-color-button-secondary-color-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Secondary
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder1.svg"
              />
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  View in Schema
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder2.svg"
              />
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder3.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Primary
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder3.svg"
              />
            </div>
            <button className="cursor-pointer py-2 px-[13px] bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/pluscircle.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left inline-block min-w-[81px]">
                  Create Step
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder2.svg"
              />
            </button>
          </div>
          <div className="hidden flex-col items-start justify-start">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs text-component-colors-components-buttons-secondary-button-secondary-fg">
          <div className="relative leading-[20px] font-semibold inline-block min-w-[42px]">
            提示词
          </div>
        </div>
        <CodeSnippet />
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-5 gap-[9px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
          <img
            className="w-[177px] h-px relative hidden"
            alt=""
            src="/divider3.svg"
          />
          <div className="flex flex-row items-center justify-end gap-[23px]">
            <div className="h-5 overflow-hidden hidden flex-row items-center justify-center gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder.svg"
              />
              <div className="self-stretch relative leading-[20px] font-semibold whitespace-nowrap">
                Learn more
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-end gap-[12px]">
              <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Tertiary
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-center py-2 px-[66px] gap-[4px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/magicwand02.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="relative leading-[20px] font-semibold inline-block min-w-[14px]">
                    AI
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder4.svg"
                />
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[13px] gap-[4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Primary
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs text-component-colors-components-buttons-secondary-button-secondary-fg">
          <div className="relative leading-[20px] font-semibold inline-block min-w-[56px]">
            展示效果
          </div>
        </div>
        <div className="w-[507px] overflow-x-auto flex flex-row items-start justify-start py-0 px-0 box-border gap-[30px] max-w-full">
          <CodeSnippet
            propAlignSelf="unset"
            propHeight="405px"
            propWidth="244px"
            propHeight1="405px"
            propPadding="24px 24px 32px"
            propMaxHeight="667px"
          />
          <CodeSnippet
            propAlignSelf="unset"
            propHeight="405px"
            propWidth="273px"
            propHeight1="405px"
            propPadding="24px 24px 17px"
            propMaxHeight="556px"
          />
        </div>
      </div>
    </div>
  );
});

export default Workflow;
