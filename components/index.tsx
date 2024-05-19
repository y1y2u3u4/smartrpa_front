import type { NextPage } from "next";
import Section from "./section";
import Workflow from "./workflow";
import styles from "./index.module.css";

const Main: NextPage = () => {
  return (
    <form className={styles.main}>
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <div className={styles.breadcrumbs}>
              <div className={styles.tabs}>
                <div className={styles.breadcrumbButtonBase}>
                  <img
                    className={styles.homeLineIcon}
                    alt=""
                    src="/homeline.svg"
                  />
                </div>
                <img
                  className={styles.chevronRightIcon}
                  alt=""
                  src="/chevronright.svg"
                />
                <div className={styles.breadcrumbButtonBase1}>
                  <div className={styles.text}>Dashboard</div>
                </div>
                <img
                  className={styles.chevronRightIcon1}
                  alt=""
                  src="/chevronright.svg"
                />
                <div className={styles.breadcrumbButtonBase2}>
                  <div className={styles.text1}>...</div>
                </div>
                <img
                  className={styles.chevronRightIcon2}
                  alt=""
                  src="/chevronright.svg"
                />
                <div className={styles.breadcrumbButtonBase3}>
                  <div className={styles.text2}>Another link</div>
                </div>
                <img
                  className={styles.chevronRightIcon3}
                  alt=""
                  src="/chevronright.svg"
                />
                <div className={styles.breadcrumbButtonBase4}>
                  <div className={styles.text3}>Sources</div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.textAndSupportingText}>
                <h1 className={styles.text4}>文档批量转化</h1>
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
                    <div className={styles.text5}>Tertiary</div>
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
                    <div className={styles.text6}>Secondary</div>
                  </div>
                  <img
                    className={styles.placeholderIcon3}
                    alt=""
                    src="/placeholder1.svg"
                  />
                </div>
                <button className={styles.button2}>
                  <img
                    className={styles.uploadCloud01Icon}
                    alt=""
                    src="/uploadcloud01.svg"
                  />
                  <div className={styles.textPadding2}>
                    <div className={styles.text7}>Upload excel</div>
                  </div>
                  <img
                    className={styles.placeholderIcon4}
                    alt=""
                    src="/placeholder2.svg"
                  />
                </button>
                <button className={styles.button3}>
                  <img
                    className={styles.download04Icon}
                    alt=""
                    src="/download04.svg"
                  />
                  <div className={styles.textPadding3}>
                    <div className={styles.text8}>Download excel</div>
                  </div>
                  <img
                    className={styles.placeholderIcon5}
                    alt=""
                    src="/placeholder3.svg"
                  />
                </button>
              </div>
              <div className={styles.inputDropdown}>
                <div className={styles.inputWithLabel}>
                  <div className={styles.label}>Search</div>
                  <div className={styles.input}>
                    <div className={styles.content1}>
                      <img
                        className={styles.searchLgIcon}
                        alt=""
                        src="/searchlg.svg"
                      />
                      <div className={styles.text9}>Search</div>
                    </div>
                  </div>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          </div>
        </div>
      </div>
      <section className={styles.splitSection}>
        <Section />
        <Workflow />
      </section>
    </form>
  );
};

export default Main;
