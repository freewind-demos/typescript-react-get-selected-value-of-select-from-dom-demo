import React, {useState} from 'react'

export default function Hello() {
  const [selectedValue, setSelectedValue] = useState('111')

  function getSelectedValueFromDomMethods() {
    const select = document.querySelector('select')
    console.log(select!.value)
  }

  return <div>
    <h1>Hello Select</h1>
    <div>
      <select value={selectedValue} onChange={(v) => setSelectedValue(v.target.value)}>
        <option value='111'>111</option>
        <option value='222'>222</option>
        <option value='333'>333</option>
      </select>
    </div>
    <div>
      <button onClick={() => getSelectedValueFromDomMethods()}>Get selected value fro DOM methods</button>
    </div>
  </div>
};
