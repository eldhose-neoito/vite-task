import { FocusEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Store/Data/actions";

const Form = () => {
  const paramValues: number[] = [...new Array(18).fill(null)];

  const [paramList, setParamList] =
    useState<(string | number | null)[]>(paramValues);
  const [success, setSuccess] = useState("");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const dispatch = useDispatch();
  const countGenerator = (count: number) => {
    return Array.from(Array(count).keys()).map((i) => "p" + i);
  };

  useEffect(() => {
    if (
      name == "" &&
      location == "" &&
      address == "" &&
      country == "" &&
      pin == "" &&
      state == "" &&
      city == ""
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [name, location, address, country, pin, state, city]);

  // Functionlity for on blur
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (disable) {
      return;
    }
    const paramNames = countGenerator(18);
    if (paramList[0] != "V") {
      paramList[0] = "V";
      paramList[1] = 1;
    }
    if (event.target.value) {
      let index = parseInt(event.target.name.slice(1));
      paramList[index] = event.target.value;
    } else if (event.target.value == "") {
      let index = parseInt(event.target.name.slice(1));
      paramList[index] = null;
    }
    setParamList(paramList);

    dispatch(
      addData(
        {
          sp: "SP_UI_VIUXDA_ClientLoc",
          paramNames: paramNames,
          paramValues: paramList,
        },
        () => setSuccess("Data added successfully")
      )
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const paramNames = countGenerator(18);
    if (paramList[0] != "V") {
      paramList[0] = "V";
      paramList[1] = 1;
    }

    dispatch(
      addData(
        {
          sp: "SP_UI_VIUXDA_ClientLoc",
          paramNames: paramNames,
          paramValues: paramList,
        },
        () => setSuccess("Data added successfully")
      )
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Add Business</h1>
          {success && (
            <p className="text-green-600 font-bold text-[24px]">{success}</p>
          )}
          <div className="bg-white shadow w-full rounded-lg ">
            <form
              onSubmit={(event) => handleSubmit(event)}
              className="px-5 py-7"
            >
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Business Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={name}
                  name="p2"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setName(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Location Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  onBlur={handleBlur}
                  name="p3"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Address Line 1
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  onBlur={handleBlur}
                  value={address}
                  name="p4"
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Country
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={country}
                  onBlur={handleBlur}
                  name="p5"
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={pin}
                  name="p6"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  State
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={state}
                  name="p7"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setState(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  City
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  value={city}
                  name="p8"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setSuccess("");
                  }}
                />
              </div>

              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600  text-white w-full 
                py-2.5 rounded-lg text-sm  font-semibold text-center inline-block disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={disable}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
