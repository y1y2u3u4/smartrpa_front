import type { NextPage } from "next";
import { memo, useState } from "react";
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

const Section: NextPage = memo(() => {
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
      <div className="w-[557px] box-border flex flex-col items-start justify-start py-8 pr-0 pl-[31px] gap-[24px] min-w-[480px] max-w-full text-left text-lg text-colors-text-text-primary-900 font-text-sm-semibold border-r-[1px] border-solid border-colors-border-border-secondary mq675:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq800:pt-[21px] mq800:pb-[21px] mq800:box-border">
        <div className="w-[489px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center py-2 px-0 box-border gap-[4px] min-w-[147px]">
              <div className="self-stretch relative leading-[28px] font-semibold">
                文档内容
              </div>
              <div className="self-stretch h-5 relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden overflow-hidden text-ellipsis whitespace-nowrap">
                Manage your team members and their account permissions here.
              </div>
            </div>
            <TextField
              className="[border:none] bg-[transparent] h-11 flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] font-text-sm-semibold text-base text-colors-text-text-quaternary-500 min-w-[147px] max-w-[320px]"
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
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[0]"
            alt=""
            src="/divider1.svg"
          />
        </div>
        <div className="self-stretch h-[670px] relative shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-xl bg-colors-background-bg-primary box-border overflow-hidden shrink-0 max-w-full text-sm border-[1px] border-solid border-colors-border-border-secondary mq450:h-auto mq450:min-h-[670]">
          <div className="absolute top-[0px] left-[0px] bg-colors-background-bg-secondary box-border w-[150.5px] flex flex-row items-start justify-start pt-spacing-lg px-spacing-3xl pb-2.5 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="w-[61px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <FormControl
                className="self-stretch h-[18px] font-text-sm-semibold font-medium text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg"
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
          <div className="absolute top-[44px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3066
            </div>
          </div>
          <div className="absolute top-[116px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3065
            </div>
          </div>
          <div className="absolute top-[188px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3064
            </div>
          </div>
          <div className="absolute top-[260px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3063
            </div>
          </div>
          <div className="absolute top-[332px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3062
            </div>
          </div>
          <div className="absolute top-[404px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[64px]">
              INV-3061
            </div>
          </div>
          <div className="absolute top-[476px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3060
            </div>
          </div>
          <div className="absolute top-[548px] left-[0px] box-border w-[150.5px] flex flex-row items-start justify-start pt-[26px] px-spacing-3xl pb-6 gap-[12px] border-b-[1px] border-solid border-colors-border-border-secondary">
            <input className="m-0 h-5 w-5" type="checkbox" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
              INV-3060
            </div>
          </div>
          <div className="absolute top-[0px] left-[150.5px] w-[150.5px] flex flex-col items-start justify-start">
            <div className="self-stretch bg-colors-background-bg-secondary flex flex-row items-center justify-start pt-[13px] px-6 pb-[11px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[18px] font-medium inline-block min-w-[37px]">
                  Action
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[13.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[113px]">
                Signup complete
              </div>
            </div>
            <div className="bg-colors-background-bg-secondary flex flex-row items-center justify-start pt-[26px] pb-6 pr-[13.5px] pl-spacing-3xl whitespace-nowrap border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[113px]">
                Signup complete
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[24.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[102px]">
                Source deleted
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[13.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[113px]">
                Signup complete
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[13.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[113px]">
                Signup complete
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[24.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[102px]">
                Source deleted
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[24.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[102px]">
                Source deleted
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-[26px] pb-6 pr-[24.5px] pl-spacing-3xl border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[20px] font-medium inline-block min-w-[102px]">
                Source deleted
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[301px] w-[97px] flex flex-col items-start justify-start text-center text-xs text-component-colors-utility-success-utility-success-700">
            <div className="bg-colors-background-bg-secondary flex flex-row items-center justify-start pt-[13px] pb-[11px] pr-[35px] pl-spacing-3xl text-left text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[18px] font-medium inline-block min-w-[38px]">
                  Status
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-background-bg-secondary flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-spacing-3xl pb-[23px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex-1 rounded-radius-full flex flex-row items-center justify-start py-0 px-1.5 border-[1.5px] border-solid border-component-colors-utility-success-utility-success-600">
                <div className="relative leading-[18px] font-medium inline-block min-w-[33px]">
                  Track
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[398px] w-[127px] flex flex-col items-start justify-start z-[1] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
            <div className="self-stretch bg-colors-background-bg-secondary flex flex-row items-center justify-start pt-[13px] px-6 pb-[11px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[18px] font-medium inline-block min-w-[27px]">
                  Date
                </div>
              </div>
            </div>
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
            <div className="self-stretch h-[72px]">
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
          <div className="absolute top-[618px] left-[0px] box-border w-full flex flex-row items-center justify-center pt-1 px-spacing-3xl pb-2.5 gap-[12px] max-w-full z-[2] text-component-colors-components-buttons-secondary-button-secondary-fg border-t-[1px] border-solid border-colors-border-border-secondary mq450:flex-wrap">
            <div className="relative leading-[20px] font-medium inline-block min-w-[81px]">
              Page 1 of 10
            </div>
            <div className="flex-1 flex flex-row items-center justify-end py-0 pr-0 pl-[225px] box-border gap-[12px] min-w-[147px] max-w-full mq450:flex-wrap mq450:pl-5 mq450:box-border">
              <button className="cursor-pointer py-1.5 px-[11px] bg-colors-background-bg-primary flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md box-border overflow-hidden flex flex-row items-center justify-center gap-[4px] min-w-[57px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left inline-block min-w-[59px]">
                    Previous
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
              </button>
              <button className="cursor-pointer py-1.5 px-[11px] bg-colors-background-bg-primary w-[60px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left inline-block min-w-[32px]">
                    Next
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
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
});

export default Section;
