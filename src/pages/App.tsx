// import '@/styles/globals.css'

import {
  Autocomplete,
  Button,
  MenuItem,
  TextField,
} from "../../node_modules/@mui/material/index";
import { AppProps } from "../../node_modules/next/dist/shared/lib/router/router";

const selectBox = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
];
const App = () => {
  return (
    <>
      <Button>text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>

      <TextField
        id="selectbox"
        label="初期設定のラベル"
        select // ← このselectが要
        fullWidth
      >
        {/* // 以下セレクトの内容を一つ一つMenuItemに格納 */}
        {selectBox.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="selectbox"
        label="初期設定のラベル"
        select // ← このselectが要
        fullWidth
      >
        {/* // 以下セレクトの内容を一つ一つMenuItemに格納 */}
        {selectBox.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="selectbox"
        label="初期設定のラベル"
        select // ← このselectが要
        fullWidth
      >
        {/* // 以下セレクトの内容を一つ一つMenuItemに格納 */}
        {selectBox.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default App;
