import type { NextPage } from "next";
import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./section.module.css";

const Section: NextPage = () => {
  const [tableCellDateTimePickerValue, setTableCellDateTimePickerValue] =
    useState(null);
  const [tableCellDateTimePicker1Value, setTableCellDateTimePicker1Value] =
    useState(null);
  const [tableCellDateTimePicker2Value, setTableCellDateTimePicker2Value] =
    useState(null);
  const [tableCellDateTimePicker3Value, setTableCellDateTimePicker3Value] =
    useState(null);
  const [tableCellDateTimePicker4Value, setTableCellDateTimePicker4Value] =
    useState(null);
  const [tableCellDateTimePicker5Value, setTableCellDateTimePicker5Value] =
    useState(null);
  const [tableCellDateTimePicker6Value, setTableCellDateTimePicker6Value] =
    useState(null);
  const [tableCellDateTimePicker7Value, setTableCellDateTimePicker7Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.content}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text}>文档内容</div>
              <div className={styles.supportingText}>
                Manage your team members and their account permissions here.
              </div>
            </div>
            <TextField
              className={styles.inputDropdown}
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="20px" height="20px" src="/searchlg-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d0d5dd" },
                "& .MuiInputBase-root": {
                  height: "44px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "8px",
                  color: "#667085",
                },
              }}
            />
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeaderCell}>
            <input className={styles.checkbox} type="checkbox" />
            <div className={styles.tableHeaderWrapper}>
              <FormControl
                className={styles.tableHeader}
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "61px",
                  height: "18px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "18px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#475467",
                    fontSize: 12,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/arrowdown.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Invoice</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className={styles.tableCell}>
            <input className={styles.checkbox1} type="checkbox" />
            <div className={styles.text1}>INV-3066</div>
          </div>
          <div className={styles.tableCell1}>
            <input className={styles.checkbox2} type="checkbox" />
            <div className={styles.text2}>INV-3065</div>
          </div>
          <div className={styles.tableCell2}>
            <input className={styles.checkbox3} type="checkbox" />
            <div className={styles.text3}>INV-3064</div>
          </div>
          <div className={styles.tableCell3}>
            <input className={styles.checkbox4} type="checkbox" />
            <div className={styles.text4}>INV-3063</div>
          </div>
          <div className={styles.tableCell4}>
            <input className={styles.checkbox5} type="checkbox" />
            <div className={styles.text5}>INV-3062</div>
          </div>
          <div className={styles.tableCell5}>
            <input className={styles.checkbox6} type="checkbox" />
            <div className={styles.text6}>INV-3061</div>
          </div>
          <div className={styles.tableCell6}>
            <input className={styles.checkbox7} type="checkbox" />
            <div className={styles.text7}>INV-3060</div>
          </div>
          <div className={styles.tableCell7}>
            <input className={styles.checkbox8} type="checkbox" />
            <div className={styles.text8}>INV-3060</div>
          </div>
          <div className={styles.column}>
            <div className={styles.tableHeaderCell1}>
              <div className={styles.tableHeader1}>
                <div className={styles.text9}>Action</div>
              </div>
            </div>
            <div className={styles.tableCell8}>
              <div className={styles.text10}>Signup complete</div>
            </div>
            <div className={styles.tableCell9}>
              <div className={styles.text11}>Signup complete</div>
            </div>
            <div className={styles.tableCell10}>
              <div className={styles.text12}>Source deleted</div>
            </div>
            <div className={styles.tableCell11}>
              <div className={styles.text13}>Signup complete</div>
            </div>
            <div className={styles.tableCell12}>
              <div className={styles.text14}>Signup complete</div>
            </div>
            <div className={styles.tableCell13}>
              <div className={styles.text15}>Source deleted</div>
            </div>
            <div className={styles.tableCell14}>
              <div className={styles.text16}>Source deleted</div>
            </div>
            <div className={styles.tableCell15}>
              <div className={styles.text17}>Source deleted</div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.tableHeaderCell2}>
              <div className={styles.tableHeader2}>
                <div className={styles.text18}>Status</div>
              </div>
            </div>
            <div className={styles.tableCell16}>
              <div className={styles.badge}>
                <div className={styles.text19}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell17}>
              <div className={styles.badge1}>
                <div className={styles.text20}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell18}>
              <div className={styles.badge2}>
                <div className={styles.text21}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell19}>
              <div className={styles.badge3}>
                <div className={styles.text22}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell20}>
              <div className={styles.badge4}>
                <div className={styles.text23}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell21}>
              <div className={styles.badge5}>
                <div className={styles.text24}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell22}>
              <div className={styles.badge6}>
                <div className={styles.text25}>Track</div>
              </div>
            </div>
            <div className={styles.tableCell23}>
              <div className={styles.badge7}>
                <div className={styles.text26}>Track</div>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.tableHeaderCell3}>
              <div className={styles.tableHeader3}>
                <div className={styles.text27}>Date</div>
              </div>
            </div>
            <div className={styles.tableCell24}>
              <DatePicker
                value={tableCellDateTimePickerValue}
                onChange={(newValue: any) => {
                  setTableCellDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 6, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell25}>
              <DatePicker
                value={tableCellDateTimePicker1Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker1Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f9fafb",
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 6, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell26}>
              <DatePicker
                value={tableCellDateTimePicker2Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker2Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 6, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell27}>
              <DatePicker
                value={tableCellDateTimePicker3Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker3Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 5, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell28}>
              <DatePicker
                value={tableCellDateTimePicker4Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker4Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 5, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell29}>
              <DatePicker
                value={tableCellDateTimePicker5Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker5Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 5, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell30}>
              <DatePicker
                value={tableCellDateTimePicker6Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker6Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 5, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.tableCell31}>
              <DatePicker
                value={tableCellDateTimePicker7Value}
                onChange={(newValue: any) => {
                  setTableCellDateTimePicker7Value(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#eaecf0",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#eaecf0" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#eaecf0",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#475467",
                    fontSize: 14,
                  },
                  input: {
                    color: "#475467",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 72,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jan 4, 2022",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.pagination}>
            <div className={styles.details}>Page 1 of 10</div>
            <div className={styles.actions}>
              <button className={styles.buttonsbutton}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className={styles.textPadding}>
                  <div className={styles.text28}>Previous</div>
                </div>
                <img
                  className={styles.placeholderIcon1}
                  alt=""
                  src="/placeholder2.svg"
                />
              </button>
              <button className={styles.buttonsbutton1}>
                <img
                  className={styles.placeholderIcon2}
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className={styles.textPadding1}>
                  <div className={styles.text29}>Next</div>
                </div>
                <img
                  className={styles.placeholderIcon3}
                  alt=""
                  src="/placeholder2.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Section;
