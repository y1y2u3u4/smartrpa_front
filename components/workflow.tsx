import type { NextPage } from "next";
import CodeSnippet from "./code-snippet";
import styles from "./workflow.module.css";

const Workflow: NextPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.content}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text}> workflow</div>
              <div className={styles.supportingText}>
                Manage your team members and their account permissions here.
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <div className={styles.text1}>Tertiary</div>
                </div>
                <img
                  className={styles.placeholderIcon1}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.placeholderIcon2}
                  alt=""
                  src="/placeholder1.svg"
                />
                <div className={styles.textPadding1}>
                  <div className={styles.text2}>Secondary</div>
                </div>
                <img
                  className={styles.placeholderIcon3}
                  alt=""
                  src="/placeholder1.svg"
                />
              </div>
              <div className={styles.button2}>
                <img
                  className={styles.placeholderIcon4}
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className={styles.textPadding2}>
                  <div className={styles.text3}>View in Schema</div>
                </div>
                <img
                  className={styles.placeholderIcon5}
                  alt=""
                  src="/placeholder2.svg"
                />
              </div>
              <div className={styles.button3}>
                <img
                  className={styles.placeholderIcon6}
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className={styles.textPadding3}>
                  <div className={styles.text4}>Primary</div>
                </div>
                <img
                  className={styles.placeholderIcon7}
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
            </div>
            <div className={styles.dropdown}>
              <img
                className={styles.dotsVerticalIcon}
                alt=""
                src="/dotsvertical.svg"
              />
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider2.svg" />
        </div>
        <div className={styles.content1}>
          <div className={styles.horizontalTabs}>
            <div className={styles.tabs}>
              <div className={styles.tabButtonBase}>
                <div className={styles.text5}>Step1</div>
              </div>
              <input
                className={styles.tabButtonBase1}
                placeholder="Step2"
                type="text"
              />
              <div className={styles.tabButtonBase2}>
                <div className={styles.text6}>Violations</div>
              </div>
              <div className={styles.tabButtonBase3}>
                <div className={styles.text7}>About the client</div>
              </div>
              <div className={styles.tabButtonBase4}>
                <div className={styles.text8}>Notes</div>
              </div>
              <div className={styles.tabButtonBase5}>
                <div className={styles.text9}>Billing</div>
              </div>
              <div className={styles.tabButtonBase6}>
                <div className={styles.text10}>Email</div>
              </div>
              <div className={styles.tabButtonBase7}>
                <div className={styles.text11}>Notifications</div>
                <div className={styles.badge}>
                  <div className={styles.text12}>2</div>
                </div>
              </div>
              <div className={styles.tabButtonBase8}>
                <div className={styles.text13}>Integrations</div>
              </div>
              <div className={styles.tabButtonBase9}>
                <div className={styles.text14}>API</div>
              </div>
            </div>
          </div>
          <div className={styles.actions1}>
            <div className={styles.button4}>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder.svg"
              />
              <div className={styles.textPadding4}>
                <div className={styles.text15}>Tertiary</div>
              </div>
              <img
                className={styles.placeholderIcon9}
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className={styles.button5}>
              <img
                className={styles.placeholderIcon10}
                alt=""
                src="/placeholder1.svg"
              />
              <div className={styles.textPadding5}>
                <div className={styles.text16}>Secondary</div>
              </div>
              <img
                className={styles.placeholderIcon11}
                alt=""
                src="/placeholder1.svg"
              />
            </div>
            <div className={styles.button6}>
              <img
                className={styles.placeholderIcon12}
                alt=""
                src="/placeholder2.svg"
              />
              <div className={styles.textPadding6}>
                <div className={styles.text17}>View in Schema</div>
              </div>
              <img
                className={styles.placeholderIcon13}
                alt=""
                src="/placeholder2.svg"
              />
            </div>
            <div className={styles.button7}>
              <img
                className={styles.placeholderIcon14}
                alt=""
                src="/placeholder3.svg"
              />
              <div className={styles.textPadding7}>
                <div className={styles.text18}>Primary</div>
              </div>
              <img
                className={styles.placeholderIcon15}
                alt=""
                src="/placeholder3.svg"
              />
            </div>
            <button className={styles.button8}>
              <img
                className={styles.plusCircleIcon}
                alt=""
                src="/pluscircle.svg"
              />
              <div className={styles.textPadding8}>
                <div className={styles.text19}>Create Step</div>
              </div>
              <img
                className={styles.placeholderIcon16}
                alt=""
                src="/placeholder2.svg"
              />
            </button>
          </div>
          <div className={styles.dropdown1}>
            <img
              className={styles.dotsVerticalIcon1}
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className={styles.textPadding9}>
          <div className={styles.text20}>提示词</div>
        </div>
        <CodeSnippet />
        <div className={styles.sectionFooter}>
          <img className={styles.dividerIcon1} alt="" src="/divider3.svg" />
          <div className={styles.content2}>
            <div className={styles.buttonsbutton}>
              <img
                className={styles.placeholderIcon17}
                alt=""
                src="/placeholder.svg"
              />
              <div className={styles.text21}>Learn more</div>
              <img
                className={styles.placeholderIcon18}
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className={styles.actions2}>
              <div className={styles.button9}>
                <img
                  className={styles.placeholderIcon19}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding10}>
                  <div className={styles.text22}>Tertiary</div>
                </div>
                <img
                  className={styles.placeholderIcon20}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.button10}>
                <img
                  className={styles.magicWand02Icon}
                  alt=""
                  src="/magicwand02.svg"
                />
                <div className={styles.textPadding11}>
                  <div className={styles.text23}>AI</div>
                </div>
                <img
                  className={styles.placeholderIcon21}
                  alt=""
                  src="/placeholder4.svg"
                />
              </div>
              <div className={styles.button11}>
                <img
                  className={styles.placeholderIcon22}
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className={styles.textPadding12}>
                  <div className={styles.text24}>Primary</div>
                </div>
                <img
                  className={styles.placeholderIcon23}
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textPadding13}>
          <div className={styles.text25}>展示效果</div>
        </div>
        <div className={styles.content3}>
          <CodeSnippet
            propAlignSelf="unset"
            propHeight="405px"
            propWidth="244px"
            propHeight1="405px"
            propPadding="var(--spacing-3xl) var(--spacing-3xl) var(--spacing-4xl)"
            propMaxHeight="667px"
          />
          <CodeSnippet
            propAlignSelf="unset"
            propHeight="405px"
            propWidth="273px"
            propHeight1="405px"
            propPadding="var(--spacing-3xl) var(--spacing-3xl) var(--padding-mid)"
            propMaxHeight="556px"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
