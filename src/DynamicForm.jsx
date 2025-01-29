import { useEffect, useState } from "react";

const DynamicForm = () => {
  const [feildList, setFeildList] = useState([{ val: "", id: Date.now() }]);
  const [isDisable, setIsDisable] = useState(true);

  const addFeild = () => {
    // console.log("Add Feild");
    setFeildList([...feildList, { val: "", id: Date.now() }]);
  };

  const handleRemove = (i) => {
    const newFeildList = [...feildList];
    newFeildList.splice(i, 1);
    setFeildList(newFeildList);

    // console.log("🚀", newFeildList, "-----", i);
  };

  const handleChange = (i, e) => {
    // console.log("inside handle Change", feildList[i]);

    const newFieldList = [...feildList];
    newFieldList[i] = { ...newFieldList[i], val: e.target.value };
    setFeildList([...newFieldList]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited 🚀 ", feildList);
  };

  useEffect(() => {
    if (feildList.every((obj) => obj.val !== "")) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [feildList]);

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {feildList.map((field, i) => {
          return (
            <div key={field.id}>
              <input
                type="text"
                name={`input${i + 1}`}
                id={`input${i + 1}`}
                value={feildList.val}
                onChange={(e) => handleChange(i, e)}
              />
              <button type="button" onClick={() => handleRemove(i)}>
                remove
              </button>
            </div>
          );
        })}
        <br />
        <button type="button" onClick={addFeild}>
          Add
        </button>
        <button type="submit" disabled={isDisable}>
          Submit
        </button>
      </form>
    </>
  );
};
export default DynamicForm;
