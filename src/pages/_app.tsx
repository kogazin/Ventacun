// import '@/styles/globals.css'

import { Autocomplete, Button, MenuItem, TextField } from "@mui/material";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useState } from "react";

const App = () => {
  const selectBox1 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox2 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox3 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox4 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox5 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox6 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox7 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox8 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox9 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox10 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox11 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];

  const selectBox12 = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
  const selectBox13 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];
  const selectBox14 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];
  const selectBox15 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];
  const selectBox16 = [
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
  ];
  const [selectedValue1, setSelectedValue1] = useState<number>(0);
  const [selectedValue2, setSelectedValue2] = useState<number>(0);

  const [selectedValue3, setSelectedValue3] = useState<number>(0);
  const [selectedValue4, setSelectedValue4] = useState<number>(0);
  const [selectedValue5, setSelectedValue5] = useState<number>(0);
  const [selectedValue6, setSelectedValue6] = useState<number>(0);
  const [selectedValue7, setSelectedValue7] = useState<number>(0);
  const [selectedValue8, setSelectedValue8] = useState<number>(0);
  const [selectedValue9, setSelectedValue9] = useState<number>(0);
  const [selectedValue10, seSselectedValue10] = useState<number>(0);
  const [selectedValue11, setselectedValue11] = useState<number>(0);
  const [selectedValue12, setselectedValue12] = useState<number>(0);
  // const [selectedValue13, setSelectedValue2] = useState<number>(0);
  const [totalValue1, setTotalValue1] = useState<number>(0); // 初期値を設定
  const [totalValue2, setTotalValue2] = useState<number>(0); // 初期値を設定
  const [totalValue3, setTotalValue3] = useState<number>(0); // 初期値を設定
  const [totalValue4, setTotalValue4] = useState<number>(0); // 初期値を設定
  const [totalValue5, setTotalValue5] = useState<number>(0); // 初期値を設定
  const [totalValue6, setTotalValue6] = useState<number>(0); // 初期値を設定

  // ドリンク
  const handleSelectChange1 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue1(event.target.value as number);
  };
  // 本数
  const handleSelectChange2 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue2(event.target.value as number);
  };
  // 合計値
  const handleCalculateTotal1 = () => {
    const result1 = selectedValue1 * selectedValue2;
    setTotalValue1(result1);
  };
  // ドリンク
  const handleSelectChange3 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue3(event.target.value as number);
  };
  // 本数
  const handleSelectChange4 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue4(event.target.value as number);
  };
  // 合計値
  const handleCalculateTotal2 = () => {
    const result2 = selectedValue3 * selectedValue4;
    setTotalValue2(result2);
  };
  // ドリンク
  const handleSelectChange5 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue5(event.target.value as number);
  };
  // 本数
  const handleSelectChange6 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue6(event.target.value as number);
  };
  // 合計値
  const handleCalculateTotal3 = () => {
    const result3 = selectedValue7 * selectedValue8;
    setTotalValue2(result3);
  };
  // // ドリンク
  // const handleSelectChange5 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue5(event.target.value as number);
  // };
  // // 本数
  // const handleSelectChange6 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue6(event.target.value as number);
  // };
  // // 合計値
  // const handleCalculateTotal3 = () => {
  //   const result4 = selectedValue5 * selectedValue6;
  //   setTotalValue1(result4);
  // };
  // // ドリンク
  // const handleSelectChange7 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue1(event.target.value as number);
  // };
  // // 本数
  // const handleSelectChange8 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue2(event.target.value as number);
  // };
  // // 合計値
  // const handleCalculateTotal4 = () => {
  //   const result5 = selectedValue7 * selectedValue8;
  //   setTotalValue1(result5);
  // };
  // // ドリンク
  // const handleSelectChange9 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue1(event.target.value as number);
  // };
  // // 本数
  // const handleSelectChange10 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue2(event.target.value as number);
  // };
  // // 合計値
  // const handleCalculateTotal5 = () => {
  //   const result6 = selectedValue9 * selectedValue10;
  //   setTotalValue1(result6);
  // };
  // // ドリンク
  // const handleSelectChange11 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue1(event.target.value as number);
  // };
  // // 本数
  // const handleSelectChange12 = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSelectedValue2(event.target.value as number);
  // };
  // // 合計値
  // const handleCalculateTotal6 = () => {
  //   const result1 = selectedValue11 * selectedValue12;
  //   setTotalValue1(result1);
  // };

  return (
    <>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue1}
            onChange={handleSelectChange1}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue2}
            onChange={handleSelectChange2}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal1}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue1}</p>
        </div>
      </div>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue3}
            onChange={handleSelectChange3}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue4}
            onChange={handleSelectChange4}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal2}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue2}</p>
        </div>
      </div>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue5}
            onChange={handleSelectChange5}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue6}
            onChange={handleSelectChange6}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal3}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue3}</p>
        </div>
      </div>
      {/*
       */}
      {/* <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue5}
            onChange={handleSelectChange5}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue6}
            onChange={handleSelectChange6}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal3}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue3}</p>
        </div>
      </div> */}
      {/* <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue3}
            onChange={handleSelectChange3}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue4}
            onChange={handleSelectChange4}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal2}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue1}</p>
        </div>
      </div>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue1}
            onChange={handleSelectChange1}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue2}
            onChange={handleSelectChange2}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue}</p>
        </div>
      </div>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue1}
            onChange={handleSelectChange1}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue2}
            onChange={handleSelectChange2}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue}</p>
        </div>
      </div>
      <div>
        <div>
          <TextField
            id="selectbox1"
            label="初期設定のラベル1"
            select
            fullWidth
            value={selectedValue1}
            onChange={handleSelectChange1}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectbox2"
            label="初期設定のラベル2"
            select
            fullWidth
            value={selectedValue2}
            onChange={handleSelectChange2}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal}
          >
            計算
          </Button>
        </div>
        <div>
          <p>選択値の合計: {totalValue}</p>
        </div>
      </div> */}
    </>
  );
};

export default App;
