import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./code-snippet.module.css";

export type CodeSnippetType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propMaxHeight?: CSSProperties["maxHeight"];
};

const CodeSnippet: NextPage<CodeSnippetType> = ({
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
    <div className={styles.codeSnippet} style={codeSnippetStyle}>
      <div className={styles.sidebar} style={sidebarStyle}>
        <b className={styles.lineNumbers}>
          <p className={styles.p}>1</p>
          <p className={styles.p1}>2</p>
          <p className={styles.p2}>3</p>
          <p className={styles.p3}>4</p>
          <p className={styles.p4}>5</p>
          <p className={styles.p5}>6</p>
          <p className={styles.p6}>7</p>
          <p className={styles.p7}>8</p>
          <p className={styles.p8}>9</p>
          <p className={styles.p9}>10</p>
          <p className={styles.p10}>11</p>
          <p className={styles.p11}>12</p>
          <p className={styles.p12}>13</p>
          <p className={styles.p13}>14</p>
          <p className={styles.p14}>15</p>
          <p className={styles.p15}>16</p>
          <p className={styles.p16}>17</p>
          <p className={styles.p17}>18</p>
          <p className={styles.p18}>19</p>
          <p className={styles.p19}>20</p>
          <p className={styles.p20}>21</p>
        </b>
      </div>
      <div className={styles.content} style={contentStyle}>
        <div className={styles.code} style={codeStyle}>
          <p className={styles.imports}>// Imports</p>
          <p className={styles.importMongooseSchemaFr}>
            <span className={styles.import}>import</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.mongoose}>mongoose</span>
            <span className={styles.span1}>{`, { `}</span>
            <span className={styles.schema}>Schema</span>
            <span className={styles.span2}>{` } `}</span>
            <span className={styles.from}>from</span>
            <span> 'untitled'</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.collectionName}>// Collection name</p>
          <p className={styles.exportConstCollectionDes}>
            <span className={styles.exportConst}>export const</span>
            <span className={styles.span3}>{` `}</span>
            <span className={styles.collection}>collection</span>
            <span> = 'Design'|</span>
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.schema1}>// Schema</p>
          <p className={styles.constSchemaNewSchema}>
            <span className={styles.const}>const</span>
            <span className={styles.span4}>{` `}</span>
            <span className={styles.schema2}>schema</span>
            <span className={styles.span5}>{` = `}</span>
            <span className={styles.new}>new</span>
            <span className={styles.schema3}>{` Schema({`}</span>
          </p>
          <p className={styles.name}>
            <span className={styles.span6}>{`  `}</span>
            <span className={styles.name1}>name</span>
            <span className={styles.span7}>{`: {`}</span>
          </p>
          <p className={styles.typeString}>
            <span className={styles.span8}>{`    `}</span>
            <span className={styles.type}>type</span>
            <span className={styles.string}>: String,</span>
          </p>
          <p className={styles.requiredTrue}>
            <span className={styles.span9}>{`    `}</span>
            <span className={styles.required}>required</span>
            <span className={styles.true}>: true</span>
          </p>
          <p className={styles.p21}>{`  },`}</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.description}>
            <span className={styles.span10}>{`  `}</span>
            <span className={styles.description1}>description</span>
            <span className={styles.span11}>{`: {`}</span>
          </p>
          <p className={styles.typeString1}>
            <span className={styles.span12}>{`    `}</span>
            <span className={styles.type1}>type</span>
            <span>: String</span>
          </p>
          <p className={styles.p22}>{`  }`}</p>
          <p className={styles.timestampsTrue}>
            <span>{`}, {`}</span>
            <span className={styles.timestamps}>timestamps</span>
            <span className={styles.true1}>{`: true})`}</span>
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.model}>// Model</p>
          <p className={styles.exportDefaultUntitledmodel}>
            <span className={styles.exportDefault}>export default</span>
            <span> untitled.model(</span>
            <span className={styles.collection1}>collection</span>
            <span className={styles.span13}>{`, `}</span>
            <span className={styles.schema4}>schema</span>
            <span className={styles.span14}>{`, `}</span>
            <span className={styles.collection2}>collection</span>
            <span className={styles.span15}>)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
