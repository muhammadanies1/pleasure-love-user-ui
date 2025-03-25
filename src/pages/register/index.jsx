import React, { useCallback } from "react";
import MainLayouts from "../../components/organisms/layouts/main";
import { Button, DatePicker, Input } from "antd";
import { useNavigate } from "react-router";
import ROUTING from "../../constants/routing";

const Register = () => {
  const navigate = useNavigate();

  const login = useCallback(() => {
    navigate(ROUTING.LOGIN);
  }, [navigate]);

  return (
    <MainLayouts>
      <div className="min-h-[600px] flex justify-center items-center">
        <div className="flex flex-col gap-5 w-[250px] tablet:w-[300px] laptop:w-[400px]">
          <div className="flex flex-col gap-2 w-full">
            <span>Your Name</span>
            <Input placeholder="Nama Depan" size="large" />
            <Input placeholder="Nama Belakang" size="large" />
            <Input placeholder="Phone" size="large" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Date of birth</span>
            <DatePicker placeholder="Date" size="large" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Login Details</span>
            <Input placeholder="Email" size="large" />
            <Input placeholder="Kata Sandi" size="large" />
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <Button type="primary" className="font-bold w-[100px]" size="large">
              Buat
            </Button>
            <span>
              Sudah punya akun?{" "}
              <u className="cursor-pointer" onClick={login}>
                Masuk disini
              </u>{" "}
            </span>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};
export default Register;
