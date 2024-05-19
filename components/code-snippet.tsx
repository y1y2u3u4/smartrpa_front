import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";

export type CodeSnippetType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propMaxHeight?: CSSProperties["maxHeight"];
};

const CodeSnippet: NextPage<CodeSnippetType> = memo(
  ({
    propAlignSelf,
    propHeight,
    propWidth,
    propHeight1,
    propPadding,
    propMaxHeight,
  }) => {
    const codeSnippetStyle: CSSProperties = useMemo(() => {
      return {
        alignSelf: propAlignSelf,
        height: propHeight,
        width: propWidth,
      };
    }, [propAlignSelf, propHeight, propWidth]);

    const sidebarStyle: CSSProperties = useMemo(() => {
      return {
        height: propHeight1,
      };
    }, [propHeight1]);

    const contentStyle: CSSProperties = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);

    const codeStyle: CSSProperties = useMemo(() => {
      return {
        maxHeight: propMaxHeight,
      };
    }, [propMaxHeight]);

    return (
      <div
        className="self-stretch h-[126px] rounded-radius-xl bg-colors-background-bg-primary box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full text-left text-sm text-colors-text-text-quaternary-500 font-roboto-mono border-[1px] border-solid border-colors-border-border-secondary"
        style={codeSnippetStyle}
      >
        <div
          className="h-[126px] w-[65px] bg-colors-background-bg-secondary box-border flex flex-col items-start justify-start pt-spacing-3xl pb-0 pr-5 pl-spacing-3xl border-r-[1px] border-solid border-colors-border-border-secondary"
          style={sidebarStyle}
        >
          <b className="w-[17px] h-[398px] relative inline-block">
            <p className="[margin-block-start:0] [margin-block-end:1px]">1</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">2</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">3</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">4</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">5</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">6</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">7</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">8</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">9</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">10</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">11</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">12</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">13</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">14</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">15</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">16</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">17</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">18</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">19</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">20</p>
            <p className="m-0">21</p>
          </b>
        </div>
        <div
          className="flex-1 flex flex-row items-start justify-start pt-spacing-3xl px-spacing-3xl pb-[21px] box-border max-w-[calc(100%_-_65px)] shrink-0 text-component-colors-components-buttons-secondary-button-secondary-fg mq450:pt-8 mq450:pb-5 mq450:box-border"
          style={contentStyle}
        >
          <div
            className="flex-1 relative font-medium inline-block max-w-full max-h-[408px] [word-break:break-word]"
            style={codeStyle}
          >
            <p className="[margin-block-start:0] [margin-block-end:1px] text-component-colors-utility-success-utility-success-700">
              // Imports
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="text-mediumvioletred">import</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{` `}</span>
              <span className="text-royalblue">mongoose</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{`, { `}</span>
              <span className="text-royalblue">Schema</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{` } `}</span>
              <span className="text-mediumvioletred">from</span>
              <span> 'untitled'</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px] text-component-colors-utility-success-utility-success-700">
              // Collection name
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="text-mediumvioletred">export const</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{` `}</span>
              <span className="text-royalblue">collection</span>
              <span> = 'Design'|</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px] text-component-colors-utility-success-utility-success-700">
              // Schema
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="text-mediumvioletred">const</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{` `}</span>
              <span className="text-royalblue">schema</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{` = `}</span>
              <span className="text-mediumvioletred">new</span>
              <span className="whitespace-pre-wrap">{` Schema({`}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="whitespace-pre-wrap">{`  `}</span>
              <span className="text-royalblue">name</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg whitespace-pre-wrap">{`: {`}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg whitespace-pre-wrap">{`    `}</span>
              <span className="text-royalblue">type</span>
              <span className="whitespace-pre-wrap">: String,</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="whitespace-pre-wrap">{`    `}</span>
              <span className="text-royalblue">required</span>
              <span className="whitespace-pre-wrap">: true</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px] whitespace-pre-wrap">{`  },`}</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="whitespace-pre-wrap">{`  `}</span>
              <span className="text-royalblue">description</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg whitespace-pre-wrap">{`: {`}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg whitespace-pre-wrap">{`    `}</span>
              <span className="text-royalblue">type</span>
              <span>: String</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px] whitespace-pre-wrap">{`  }`}</p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span>{`}, {`}</span>
              <span className="text-royalblue">timestamps</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{`: true})`}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:1px] text-component-colors-utility-success-utility-success-700">
              // Model
            </p>
            <p className="m-0">
              <span className="text-mediumvioletred">export default</span>
              <span> untitled.model(</span>
              <span className="text-royalblue">collection</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{`, `}</span>
              <span className="text-royalblue">schema</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">{`, `}</span>
              <span className="text-royalblue">collection</span>
              <span className="text-component-colors-components-buttons-secondary-button-secondary-fg">
                )
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default CodeSnippet;
