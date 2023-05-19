import { Form, Input, DatePicker, Radio, Button, Card } from "antd";

export const EnterBeatdown = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Perform actions with the form data, such as submitting to a server
  };

  return (
    <div>
      <Card style={{ width: 700 }}>
        <Form onFinish={onFinish}>
          <Form.Item label="Enter AO">
            <Input name="text" />
          </Form.Item>

          <Form.Item label="Beatdown Date">
            <DatePicker name="date" />
          </Form.Item>

          <Form.Item label="Did You Q?">
            <Radio.Group name="yesNo">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

// import {
//   Form,
//   // Input,
//   DatePicker,
//   Radio,
//   Button,
//   Card,
//   AutoComplete,
// } from "antd";
// import { useState } from "react";

// const generateAlphabeticalSuggestions = (searchText, options) => {
//   const filteredOptions = options.filter(
//     (option) => option.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//   );
//   const sortedOptions = filteredOptions.sort((a, b) =>
//     a.toLowerCase().localeCompare(b.toLowerCase())
//   );
//   return sortedOptions;
// };

// export const EnterBeatdown = () => {
//   const [options, setOptions] = useState([]);
//   const [value, setValue] = useState("");

//   const handleSearch = (searchText) => {
//     const sortedOptions = generateAlphabeticalSuggestions(searchText, options);
//     setOptions(sortedOptions);
//   };

//   const handleChange = (selectedValue) => {
//     setValue(selectedValue);
//   };

//   const onFinish = (values) => {
//     console.log("Form values:", values);
//     // Perform actions with the form data, such as submitting to a server
//   };

//   return (
//     <div>
//       <Card style={{ width: 700 }}>
//         <Form onFinish={onFinish}>
//           <Form.Item label="Enter AO">
//             {/* <Input name="text" /> */}
//             <AutoComplete
//               options={options.map((option) => ({ value: option }))}
//               value={value}
//               onSearch={handleSearch}
//               onChange={handleChange}
//               placeholder="Type something..."
//             />
//           </Form.Item>

//           <Form.Item label="Beatdown Date">
//             <DatePicker name="date" />
//           </Form.Item>

//           <Form.Item label="Did You Q?">
//             <Radio.Group name="yesNo">
//               <Radio value={true}>Yes</Radio>
//               <Radio value={false}>No</Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };
