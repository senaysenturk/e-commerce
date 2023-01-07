import React, { useEffect, useState } from "react";
import { getCities } from "../../../../network/requests/order/order";
export const Form = ({
  handleAddress,
  MaskInput,
  handleSave,
  city,
  enable,
  isEdit,
}) => {
  const [cities, setCities] = useState([]);
  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    console.log(cities);
  };

  useEffect(() => {
    getAllCities();
  }, []);
  return (
    <div className="address-form">
      <div className="person">
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={handleAddress}
        />

        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          onChange={handleAddress}
        />
      </div>
      <MaskInput
        alwaysShowMask
        mask={"+90 (000) 000 - 0000"}
        size={21}
        showMask
        maskChar="_"
        name="phone"
        onChange={handleAddress}
      />

      {/*  
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            onChange={handleAddress}
          /> */}
      <p>Address Informations</p>
      <select id="city" name="city" onChange={handleAddress}>
        <option>-- None --</option>
        {cities.map((cityObject, index) => (
          <option key={index}>{cityObject.city}</option>
        ))}
      </select>
      <select
        id="state"
        name="state"
        disabled={enable}
        onChange={handleAddress}
      >
        <option>-- None --</option>

        {city &&
          cities
            .filter((cityName) => cityName.city === city)[0]
            .states.map((state, index) => {
              return <option key={index}>{state}</option>;
            })}
      </select>
      <textarea
        id="address"
        name="address"
        placeholder="Write something.."
        onChange={handleAddress}
      ></textarea>
      {/*  
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Your postal code.."
            onChange={handleAddress}
          /> */}
      <MaskInput
        alwaysShowMask
        mask={"00000"}
        size={6}
        showMask
        maskChar="_"
        name="postcode"
        onChange={handleAddress}
      />

      <input
        type="text"
        id="addressName"
        name="addressName"
        placeholder="Your address name.."
        onChange={handleAddress}
      />
      <div className="add-button">
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
