import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {

  //images
  const sliderImg1 = `${process.env.PUBLIC_URL}/assets/images/login/img1.png`;
  const sliderImg2 = `${process.env.PUBLIC_URL}/assets/images/login/img2.png`;
  const sliderImg3 = `${process.env.PUBLIC_URL}/assets/images/login/img2.jpg`;
  const backgroungimage = `${process.env.PUBLIC_URL}/assets/images/login/bg.png`;

  // slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section
      class="login-page"
      style={{
        backgroundImage: `url(${backgroungimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="left">
          <h1 className="title">Get Started</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <div className="icon-box">
                <span className="input-icon">
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder=''
                  autocomplete="off"
                  {...register("username", {
                    required: "Username is required.",
                  })}
                  error={!!errors.username}
                  autofocus
                />
                <label htmlFor='username'>Username</label>
              </div>
              {errors.username && (
                <Typography variant="body2" color="error">
                  {errors.username.message}
                </Typography>
              )}
            </div>
            <div className="input-group">
              <div className="icon-box">
                <span className="input-icon">
                  <MdOutlineKey />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control"
                  placeholder=''
                  autocomplete="off"
                  {...register("password", {
                    required: true,
                    validate: {
                      checkLength: (value) => value.length >= 6,
                      matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                          value
                        ),
                    },
                  })}
                  error={!!errors.password}
                />
                <label htmlFor='password'>Password</label>
                <span
                  className="eye-icon"
                  onClick={handleClickShowPassword}>
                  {showPassword ?
                    <IoMdEye /> : <IoMdEyeOff />
                  }
                </span>
              </div>
              {errors.password?.type === "required" && (
                <Typography variant="body2" color="error">
                  Password is required.
                </Typography>
              )}
              {errors.password?.type === "checkLength" && (
                <Typography variant="body2" color="error">
                  Password should be at least 6 characters.
                </Typography>
              )}
              {errors.password?.type === "matchPattern" && (
                <Typography variant="body2" color="error">
                  Password should contain at least one uppercase letter,
                  lowercase letter, digit, and special symbol.
                </Typography>
              )}
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </div>
        <div className="right">
          <Slider {...settings}>
            <div>
              <div class="slickbox">
                <div class="bg-slate-400  h-[80vh]">
                  {" "}
                  <img src={sliderImg1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div class="slickbox">
                <div class="bg-red-100 h-[80vh]">
                  {" "}
                  <img src={sliderImg2} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div class="slickbox">
                <div class="bg-green-100 h-[80vh]">
                  <img src={sliderImg3} alt=""></img>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Login
