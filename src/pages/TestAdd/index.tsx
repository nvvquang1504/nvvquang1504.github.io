import VerticalStack from "../../components/VerticalStack";
import InputField from "../../components/InputField";
import MyButton from "../../components/MyButton";
import axios from "axios";
import { useState } from "react";
const TestAdd = () => {
  const [inputImage, setInputImage] = useState<any>();
  function handleChangeFile(event: any) {
    setInputImage(event.target.files[0]);
  }
  function handleSubmit() {
    const formData = new FormData();
    formData.append("productImage", inputImage);
    formData.append("name", "testName");
    axios
      .post("http://192.168.61.78:3000/product/create", formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <VerticalStack width={"50%"} margin={"0 auto"} spacing={2}>
      <InputField label={"name"} isRequired={true} type={"text"} />
      <InputField label={"price"} isRequired={true} type={"number"} />
      <VerticalStack
        justifyContent={"start"}
        alignItems={"center"}
        height={"15rem"}
      >
        <input
          accept="image/*"
          type="file"
          name="abc"
          onChange={handleChangeFile}
        />
        <img src={inputImage} alt="" />
      </VerticalStack>

      <MyButton type={"primary"} isRoundCorner={false} onClick={handleSubmit}>
        Add Product
      </MyButton>
    </VerticalStack>
  );
};

export default TestAdd;
