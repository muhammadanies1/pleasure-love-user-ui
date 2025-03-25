import React, { useCallback } from "react";
import MainLayouts from "../../components/organisms/layouts/main";
import { Button, Input } from "antd";
import { useNavigate } from "react-router";
import ROUTING from "../../constants/routing";

const Login = () => {
  const navigate = useNavigate();

  const register = useCallback(() => {
    navigate(ROUTING.REGISTER);
  }, [navigate]);

  return (
    <MainLayouts>
      <div className="min-h-96 flex justify-center items-center">
        <div className="flex flex-col gap-5 w-[250px] tablet:w-[300px] laptop:w-[400px]">
          <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Email" size="large" />
            <Input placeholder="Kata Sandi" size="large" />
            <span>Lupa kata sandi?</span>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <Button type="primary" className="font-bold w-[100px]" size="large">
              Login
            </Button>
            <span>
              Belum punya akun?{" "}
              <u className="cursor-pointer" onClick={register}>
                Buat disini
              </u>{" "}
            </span>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Login;
